import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../Model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  /* URL: 'http://localhost:8080/', */
  sURL= environment.URL + 'skill/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.sURL + 'lista');
  }

  public details(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(this.sURL + `details/${id}`)
  }

  public save(skill: Skill): Observable<any>{
    return this.httpClient.post<any>(this.sURL + 'crear', skill);
  }

  public update(id: number, skillEdit: Skill): Observable<any>{
    return this.httpClient.put<any>(this.sURL + `update/${id}`, skillEdit);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.sURL + `delete/${id}`);
  }

}
