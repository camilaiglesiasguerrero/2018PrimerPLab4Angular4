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
import { MostrarPersonaComponent } from './componentes/mostrar-persona/mostrar-persona.component';
import { NexoComponent } from './componentes/nexo/nexo.component';
import { CabeceraComponent } from './Componentes/cabecera/cabecera.component';
import { LoginComponent } from './Componentes/login/login.component';

//DIRECTIVAS
import { BackgroundSexoDirective } from './directivas/background-sexo.directive';

//FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

var config = {
  apiKey: "AIzaSyBk4330k8XRb1rw_CyadTDQyMtGaxbsbXg",
  authDomain: "saladejuegos-d05fd.firebaseapp.com",
  databaseURL: "https://saladejuegos-d05fd.firebaseio.com",
  projectId: "saladejuegos-d05fd",
  storageBucket: "saladejuegos-d05fd.appspot.com",
  messagingSenderId: "524880656742"
};


@NgModule({
  declarations: [
    AppComponent,
    GestionComponent,
    BackgroundSexoDirective,
    MostrarPersonaComponent,
    NexoComponent,
    CabeceraComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RuteoModule,
    HttpModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [PersonaService, MiHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
