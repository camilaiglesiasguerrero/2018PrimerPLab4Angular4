import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule,AngularFireAuth, } from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import { Persona } from '../../clases/persona';
import { PersonaService } from '../../servicios/persona.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  laPersona : Persona;
  Mensaje: string;

  constructor(private _auth:AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router) {
      this.laPersona = new Persona();
    }

    async Entrar() {
      console.info(this.laPersona.mail);
      if(this.laPersona.mail==null||this.laPersona.password==null||this.laPersona.mail==''||this.laPersona.password=='')
        {
          this.Mensaje="¡Debés ingresar email válido y clave!";    
          var x = document.getElementById("snackbar");
          x.className = "show Perdedor";
       setTimeout(function(){ 
          x.className = x.className.replace("show", "");
       }, 3000);
  
        }
        else{
          await this._auth.auth.signInWithEmailAndPassword(this.laPersona.mail,this.laPersona.password)
                          .then(result => {  
                            this.laPersona.GuardarLocalStorage(this.laPersona);
                            this.router.navigate(['/Gestion'])
                            ;})
                          .catch(error =>{ this.Mensaje= error.message })
                        /*  var x = document.getElementById("snackbar");
                          x.className = "show Perdedor";
                       setTimeout(function(){ 
                          x.className = x.className.replace("show", "");
                       }, 3000);*/
        }  
  }

  ngOnInit() {
  }

}
