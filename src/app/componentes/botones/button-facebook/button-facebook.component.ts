import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/Model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-button-facebook',
  templateUrl: './button-facebook.component.html',
  styleUrls: ['./button-facebook.component.css']
})
export class ButtonFacebookComponent implements OnInit {
  user: user= new user("", "", "","", "", "", "", "", "", "", "")
  

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {this.user = data});
  }

}
