import { Injectable } from '@angular/core';
import { Persona } from '../clases/persona';
import {MiHttpService} from './mi-http.service';
import { IfObservable } from 'rxjs/observable/IfObservable';
 
@Injectable()
export class PersonaService {

  constructor(public miHttp: MiHttpService) { }

  public TraerDatos():Promise<Array<any>> {
    return   this.miHttp.httpGetP()
     .then( data => {
       //console.log( data );
       return data;
     })
     .catch( err => {
       console.log( err );
       return null;
     });
     //return null;
  }

  public TraerUno(id:string):Promise<Array<any>> {
    return   this.miHttp.httpPostP(id)
     .then( data => {
       //console.log( data );
       return data;
     })
     .catch( err => {
       console.log( err );
       return null;
     });
     //return null;
  }

  public GuardarDatos(unaPersona: Persona)
  {
    this.miHttp.Insert(unaPersona);
  }

  public BorrarDatos(id: string)
  {
    this.miHttp.Delete(id);    
  }

  public ModificarDatos(unaPersona: Persona)
  {
    this.miHttp.Update(unaPersona);
  }

  
}


