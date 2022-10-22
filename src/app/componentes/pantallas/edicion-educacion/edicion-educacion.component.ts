import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/Model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edicion-educacion',
  templateUrl: './edicion-educacion.component.html',
  styleUrls: ['./edicion-educacion.component.css']
})
export class EdicionEducacionComponent implements OnInit {
  educacionEdit : Educacion;
  constructor(private educacionService: EducacionService, 
              private activatedRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    /*const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.details(id).subscribe(
      data => {
        this.educacionEdit = data;
      },
      err => {
        alert("hubo un error por aca");
        this.router.navigate(['']);
      }
    )*/
  }

  onUpdate(): void {
    /*const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.update(id, this.educacionEdit).subscribe(
      data=>{
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la Educacion");
        this.router.navigate(['']);
      }
    )*/
  }

}
