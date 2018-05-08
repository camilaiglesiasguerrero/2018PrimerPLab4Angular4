import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

//RUTEO
import { RouterModule, Routes } from '@angular/router';
import { RuteoModule } from './ruteo/ruteo.module';

//SERVICIOS
import { HttpModule } from '@angular/http';
import { MiHttpService } from './servicios/mi-http.service';
import { PersonaService } from './servicios/persona.service';

//COMPONENTES
import { GestionComponent } from './componentes/gestion/gestion.component';

//DIRECTIVAS
import { BackgroundSexoDirective } from './directivas/background-sexo.directive';
import { MostrarPersonaComponent } from './componentes/mostrar-persona/mostrar-persona.component';
import { NexoComponent } from './componentes/nexo/nexo.component';
import { CabeceraComponent } from './Componentes/cabecera/cabecera.component';


@NgModule({
  declarations: [
    AppComponent,
    GestionComponent,
    BackgroundSexoDirective,
    MostrarPersonaComponent,
    NexoComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RuteoModule,
    HttpModule
  ],
  providers: [PersonaService, MiHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
