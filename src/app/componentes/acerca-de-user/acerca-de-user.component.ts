import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/Model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-acerca-de-user',
  templateUrl: './acerca-de-user.component.html',
  styleUrls: ['./acerca-de-user.component.css']
})
export class AcercaDeUserComponent implements OnInit {
  user: user= new user("", "", "","", "", "", "", "", "", "", "")
  

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {this.user = data});
  }

}