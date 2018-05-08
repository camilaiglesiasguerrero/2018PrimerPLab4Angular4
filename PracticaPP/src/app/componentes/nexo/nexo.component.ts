import { Component, OnInit } from '@angular/core';
import { Persona } from '../../clases/persona';

@Component({
  selector: 'app-nexo',
  templateUrl: './nexo.component.html',
  styleUrls: ['./nexo.component.css']
})
export class NexoComponent implements OnInit {
  laPersona : Persona;

  constructor() { }

  ngOnInit() {
  }

  Mostrar(unaPersona: Persona){
    this.laPersona = unaPersona;
  }
}
