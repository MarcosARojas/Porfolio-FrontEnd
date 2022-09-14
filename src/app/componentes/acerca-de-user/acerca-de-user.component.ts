import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/Model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de-user',
  templateUrl: './acerca-de-user.component.html',
  styleUrls: ['./acerca-de-user.component.css']
})
export class AcercaDeUserComponent implements OnInit {
  persona: persona= new persona("", "", "","", "", "","", "", "")
  
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>{this.persona =data});
  }

}
