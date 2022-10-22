import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../Model/experiencia.model';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  
  expeURL= environment.URL + 'experiencia/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.expeURL+'lista/');
  }

  public details(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expeURL+ `details/${id}`);
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.expeURL + 'crear', experiencia);
  }

  public update(id: number, expeLab: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.expeURL + `update/${id}`, expeLab);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expeURL + `delete/${id}`);
  }


}
