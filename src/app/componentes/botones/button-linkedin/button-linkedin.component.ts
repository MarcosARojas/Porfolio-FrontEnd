import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/Model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-button-linkedin',
  templateUrl: './button-linkedin.component.html',
  styleUrls: ['./button-linkedin.component.css']
})
export class ButtonLinkedinComponent implements OnInit {
  persona: persona= new persona("", "", "","", "", "", "", "", "", "")

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>{this.persona =data});
  }

}
