import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/Model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];
  experienciaEdit?: Experiencia;
  isLogged = false;

  constructor(private experienciaService: ExperienciaService,
    private tokenService: TokenService,) { }

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    
  }
  cargarExperiencia(): void {
    this.experienciaService.lista().subscribe(data => {this.expe = data});
  }

  delete(id?: number) {
    if (id != undefined) {
      this.experienciaService.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
  details(id?: number) {
    this.experienciaService.details(id).subscribe(data => { this.experienciaEdit = data });
    localStorage.setItem('idExperiencia', JSON.stringify(id));
    console.log(id);
  }
  

  onUpdate() {
    const idEdit = JSON.parse(localStorage.getItem('idExperiencia'));
    this.experienciaService.update(idEdit, this.experienciaEdit).subscribe(
      data=>{
        alert("Se edito la experiencia");
        window.location.reload();
      }, err => {
        alert("Error al modificar la Experiencia");
      }
    )}
  
}
