import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/Model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-button-instagram',
  templateUrl: './button-instagram.component.html',
  styleUrls: ['./button-instagram.component.css']
})
export class ButtonInstagramComponent implements OnInit {
  user: user= new user("", "","", "","", "", "", "", "", "", "")

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data5 => {this.user = data5});
  }

}
