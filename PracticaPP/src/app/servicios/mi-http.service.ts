import { log } from 'util';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Persona } from '../clases/persona';

@Injectable()
export class MiHttpService {
  url = 'http://localhost:7070/jugadoresarchivo/apirestjugadores/Persona/';
  headers: Headers;
  options: RequestOptions;

  constructor( public http: Http ) {     
      this.headers = new Headers({ 'Content-Type': 'application/json', 
      'Accept': 'q=0.8;application/json;q=0.9' });
      this.options = new RequestOptions({ headers: this.headers });   
    }
  

  public httpGetP ()
  {
    
    return this.http
    .get( this.url)
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpPostP( objeto: any )
  {
    return this.http
    .get( this.url + objeto )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
    /*.post(this.url, objeto)
    .subscribe( data => {
      console.log( data );
      return data;
    });*/
  }

  public httpGetO ( url: string): Observable<Response>
  {
    return this.http.get( url )
      .map( ( res: Response ) => res.json())
      .catch( ( err: any ) => Observable.throw(err.json().error || 'Server error'));
  }


  private extractData ( res: Response )
  {
    return res.json() || {};
  }

  private handleError ( error: Response | any )
  {
    return error;
  }

  Insert(persona:Persona){
    
    let data = new URLSearchParams();
    data.append('nombre',persona.nombre);
    data.append('mail', persona.mail);
    data.append('sexo', persona.sexo);
    data.append('password', persona.password);
    data.append('pathFoto',persona.pathFoto);
    //console.info(this.url, data);    
   return this.http
      .post(this.url, data)
        .subscribe(data => {
            console.log(data);
        }, error => {
            console.log(error.json());
        });
  }

  Delete(id:string){
    let data = new URLSearchParams();
    data.append('id',id);
    /*let val = new RequestOptions();
    val.params = data;
    console.info(val);*/
    return this.http
    /*  .delete(this.url,val)*/
    .post(this.url+'Delete/', data)
      .subscribe(data => {
          console.log(data);
      }, error => {
          console.log(error.json());
      });
      
  }

  Update(persona: Persona){
    console.info(persona.id);
    let data = new URLSearchParams();
    data.append('id',persona.id);    
    data.append('nombre',persona.nombre);
    data.append('mail', persona.mail);
    data.append('sexo', persona.sexo);
    data.append('password',persona.password);
    data.append('pathFoto',persona.pathFoto);
    
   return this.http
        .put(this.url, data)
        
  /*    .post(this.url+'Cargar/'+persona.id, data)*/
        .subscribe(data => {
             console.log(data);
             
        }, error => {
            console.log(error.json());
        });
  }

}
