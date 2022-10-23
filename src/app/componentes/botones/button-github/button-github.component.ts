import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/Model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-button-github',
  templateUrl: './button-github.component.html',
  styleUrls: ['./button-github.component.css']
})
export class ButtonGithubComponent implements OnInit {
  user: user= new user("", "", "", "","", "", "", "", "", "", "")

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data6 => {this.user = data6});
  }

}
