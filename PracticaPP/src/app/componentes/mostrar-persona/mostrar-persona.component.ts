import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../../clases/persona';

@Component({
  selector: 'app-mostrar-persona',
  templateUrl: './mostrar-persona.component.html',
  styleUrls: ['./mostrar-persona.component.css']
})
export class MostrarPersonaComponent implements OnInit {
  @Input() laPersona : Persona;

  constructor() {  
  }

  ngOnInit() {
    
    
  }

}
