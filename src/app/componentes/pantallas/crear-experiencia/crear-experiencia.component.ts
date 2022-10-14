import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/Model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-crear-experiencia',
  templateUrl: './crear-experiencia.component.html',
  styleUrls: ['./crear-experiencia.component.css']
})
export class CrearExperienciaComponent implements OnInit {
  puesto: string = '';
  empresa: string = '';
  periodo: string = '';
  descripcion: string = '';

  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.puesto, this.empresa, this.periodo ,this.descripcion);
    this.experienciaService.save(expe).subscribe(
      data => {
        alert("Experiencia añadida");
        window.location.reload();
      }, err => {
        alert("Falló la creacion de la experiencia");
      }
    )
  }

}
