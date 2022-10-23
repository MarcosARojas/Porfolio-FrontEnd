import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/Model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skill: Skill[] = [];
  skillEdit?: Skill;
  isLogged = false;
  nombre: string ='';


  constructor(private skillService: SkillService,
    private tokenService: TokenService,) { }

  ngOnInit(): void {
    this.cargarSkill();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    } 
    
  }
  cargarSkill(): void {
    this.skillService.lista().subscribe(
      data => { 
        this.skill = data
      });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.skillService.delete(id).subscribe(
        data => {
          this.cargarSkill();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }
  details(id?: number) {
    this.skillService.details(id).subscribe(data => { this.skillEdit = data });
    localStorage.setItem('id', JSON.stringify(id));
    console.log(id);
  }
  

  onUpdate() {
    const idEdit = JSON.parse(localStorage.getItem('id'));
    this.skillService.update(idEdit, this.skillEdit).subscribe(
      data=>{
        alert("Se edito la skill");
        window.location.reload();
      }, err => {
        alert("Error al modificar la Educacion");
      }
    )}
  
}
