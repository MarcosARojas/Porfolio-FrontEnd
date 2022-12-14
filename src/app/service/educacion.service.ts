import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../Model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  eduURL= environment.URL +'educacion/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.eduURL + 'lista');
  }

  public details(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.eduURL + `details/${id}`)
  }

  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.eduURL + 'crear', educacion);
  }

  public update(id: number, educacionEdit: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.eduURL + `update/${id}/`, educacionEdit);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.eduURL + `delete/${id}/`);
  }

}
