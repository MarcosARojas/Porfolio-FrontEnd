import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/Model/user.model';
import { TokenService } from 'src/app/service/token.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-acerca-de-user',
  templateUrl: './acerca-de-user.component.html',
  styleUrls: ['./acerca-de-user.component.css']
})
export class AcercaDeUserComponent implements OnInit {
  user: user= new user("", "", "","", "", "", "", "", "", "", "")
  userEdit: user;
  isLogged=false;
  edit: boolean = false;

  constructor(public userService: UserService, private tokenService: TokenService,) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {this.user = data});
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  editUser() {
    this.edit= true;
  }

  onUpdate() {
    const idEdit = this.user.id;
    this.userService.update(idEdit, this.userEdit).subscribe(
      data=>{
        alert("Se edito la educacion");
        window.location.reload();
      }, err => {
        alert("Error al modificar la información");
      }
    )}
}