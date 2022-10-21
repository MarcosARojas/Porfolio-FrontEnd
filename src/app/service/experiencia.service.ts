import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../Model/experiencia.model';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  
  expURL = 'http://localhost:8080/experiencia/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.expURL+'lista/');
  }

  public details(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL+ `details/${id}`);
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'crear/', experiencia);
  }

  public update(id: number, expeLab: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}/`, expeLab);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}/`);
  }


}
