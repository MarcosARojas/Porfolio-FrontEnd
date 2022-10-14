import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/Model/user.model';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLogged = false;
  

  constructor(public tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    };
  }

  onLogOut(): void {
   this.tokenService.logOut();
   window.location.reload(); 
  }

  onLogin(): void { 
   }

}
