import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/Model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-button-github',
  templateUrl: './button-github.component.html',
  styleUrls: ['./button-github.component.css']
})
export class ButtonGithubComponent implements OnInit {
  persona: persona= new persona("", "", "","", "", "", "", "", "", "")

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>{this.persona =data});
  }

}
