import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/Model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-crear-educacion',
  templateUrl: './crear-educacion.component.html',
  styleUrls: ['./crear-educacion.component.css']
})
export class CrearEducacionComponent implements OnInit {
  titulo: string = '';
  institucion: string = '';
  periodo: string = '';
  constructor(private educacionService: EducacionService) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const educacion = new Educacion(this.titulo, this.institucion, this.periodo);
    this.educacionService.save(educacion).subscribe(
      data => {
        alert("Educacion añadida");
        window.location.reload();
      }, err => {
        alert("Falló la creacion de la educacion");
      }
    )
  }
}
