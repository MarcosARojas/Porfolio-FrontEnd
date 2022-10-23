import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/Model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-crear-skill',
  templateUrl: './crear-skill.component.html',
  styleUrls: ['./crear-skill.component.css']
})
export class CrearSkillComponent implements OnInit {

  nombre: string ='';
  porcentaje: number=null;

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
  }
  
  onCreate(): void {
    const skill = new Skill(this.nombre, this.porcentaje);
    this.skillService.save(skill).subscribe(
      data => {
        alert("Skill añadida");
        window.location.reload();
      }, err => {
        alert("Falló la creacion de la Skill");
      }
    )
  }
}
