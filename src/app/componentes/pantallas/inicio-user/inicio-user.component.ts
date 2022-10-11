import { Component, OnInit } from '@angular/core';
import { LogginUsuario } from 'src/app/Model/loggin-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-inicio-user',
  templateUrl: './inicio-user.component.html',
  styleUrls: ['./inicio-user.component.css']
})
export class InicioUserComponent implements OnInit {

  isLogged= false;
  isLogginnFail= false;
  logginUsuario!: LogginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[]=[];
  errMsj!: string;

  constructor(private tokenService: TokenService, private authServise: AuthService ) { }

  ngOnInit(): void {
    if( this.tokenService.getToken()){
      this.isLogged=true;
      this.isLogginnFail=false;
      this.roles=this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.logginUsuario= new LogginUsuario(this.nombreUsuario, this.password);
    this.authServise.login(this.logginUsuario).subscribe(data => {
          this.isLogged=true
          this.isLogginnFail= false;
          this.tokenService.setToken(data.token);
          this.tokenService.setUserName(data.nombreUsuario);
          this.tokenService.setAuthorities(data.authorities);
          this.roles = data.authorities;
      }, err =>{
        this.isLogged=false;
        this.isLogginnFail=true;
        this.errMsj= err.error.mensaje;
        console.log(this.errMsj);
      });
  }



  
}
