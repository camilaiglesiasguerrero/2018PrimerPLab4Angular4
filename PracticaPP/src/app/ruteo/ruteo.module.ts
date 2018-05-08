//ruteo
import { RouterModule, Routes } from '@angular/router';

//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//component
import { NexoComponent } from '../componentes/nexo/nexo.component';
import { GestionComponent } from '../componentes/gestion/gestion.component';

const MiRuteo = [
  {path: '' , component: NexoComponent},
  {path:'Gestion', component: GestionComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [  RouterModule
  ]
})
export class RuteoModule { }



