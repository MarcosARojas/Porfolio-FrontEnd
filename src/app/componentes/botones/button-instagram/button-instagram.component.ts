import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/Model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-button-instagram',
  templateUrl: './button-instagram.component.html',
  styleUrls: ['./button-instagram.component.css']
})
export class ButtonInstagramComponent implements OnInit {
  persona: persona= new persona("", "", "","", "", "", "", "", "", "")

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>{this.persona =data});
  }

}
