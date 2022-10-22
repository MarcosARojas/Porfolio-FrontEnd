import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDto } from '../Model/jwt-dto';
import { LogginUsuario } from '../Model/loggin-usuario';
import { NuevoUsuario } from '../Model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL= environment.URL + 'auth/';
  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LogginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.URL + 'loggin', loginUsuario);
  }


}
