import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { user } from '../Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uURL= environment.URL;

  constructor(private http: HttpClient) { }

  public getUser(): Observable<user>{
    return this.http.get<user>(this.uURL+"user/traer");
  }
}





