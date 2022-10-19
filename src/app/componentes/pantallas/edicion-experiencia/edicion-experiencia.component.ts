import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/Model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-edicion-experiencia',
  templateUrl: './edicion-experiencia.component.html',
  styleUrls: ['./edicion-experiencia.component.css']
})
export class EdicionExperienciaComponent implements OnInit {
  expeLab : Experiencia = null;
  constructor(private experienciaService: ExperienciaService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
   /* const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.details(id).subscribe(
      data => {
        this.expeLab = data;
      },
      err => {
        alert("hubo un error por aca");
        this.router.navigate(['']);
      }
    )*/
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.update(id ,this.expeLab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => { 
        alert("No se pudo");
        this.router.navigate(['']);
  })
  }

}
