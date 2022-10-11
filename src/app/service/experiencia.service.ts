import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../Model/experiencia.model';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  URL = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<experiencia[]>{
    return this.httpClient.get<experiencia[]>(this.URL+"experiencia/traer/");
  }

  public details(id: number): Observable<experiencia>{
    return this.httpClient.get<experiencia>(this.URL+ `details/${id}`);
  }
}
