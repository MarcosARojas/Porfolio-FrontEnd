import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/Model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-cabezera',
  templateUrl: './cabezera.component.html',
  styleUrls: ['./cabezera.component.css']
})
export class CabezeraComponent implements OnInit {
  user: user= new user("", "", "","", "", "", "", "", "", "", "")
  

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data1 => {this.user = data1});
  }

}