import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/Model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-edicion-experiencia',
  templateUrl: './edicion-experiencia.component.html',
  styleUrls: ['./edicion-experiencia.component.css']
})
export class EdicionExperienciaComponent implements OnInit {
  expeLab : Experiencia = null;
  activatedRoute: any;
  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.details(id).subscribe(
      data => {this.expeLab = data;},
      err => {alert("hubo un error");}
    )
  }

  onUpdate(): void {
    this.experienciaService.update(id, this.expeLab).subscribe(
      data => {
        
        window.location.reload();
      }, err => { alert("No se pudo");
  })}

}
