import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/Model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-button-linkedin',
  templateUrl: './button-linkedin.component.html',
  styleUrls: ['./button-linkedin.component.css']
})
export class ButtonLinkedinComponent implements OnInit {
  user: user= new user("", "","", "","", "", "", "", "", "", "")

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {this.user = data});
  }

}
