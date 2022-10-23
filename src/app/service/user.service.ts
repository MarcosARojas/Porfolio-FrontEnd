import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { user } from '../Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uURL= environment.URL + "user/";

  constructor(private httpClient: HttpClient) { }

  public getUser(): Observable<user>{
    return this.httpClient.get<user>(this.uURL+"traer");
  }


  public update(id: number, userEdit: user): Observable<any>{
    return this.httpClient.put<any>(this.uURL + `update/${id}`, userEdit);
  }

}





