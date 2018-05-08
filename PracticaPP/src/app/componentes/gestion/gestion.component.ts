import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from '../../clases/persona';
import { PersonaService } from '../../servicios/persona.service';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  
  public listadoDePersonas: Array<any>;
  miServicioPersona:PersonaService;
  nuevoChecked : boolean = false;
  unaPersona: Persona;
  pathFoto: String;
  mostrarForm : boolean = false;
  nuevo : boolean = false;
  mensaje: string;
  laPersona : Persona;
  irA:boolean = false;
  
  constructor(private PersonaS: PersonaService, private route: ActivatedRoute,
  private router: Router) {
    this.miServicioPersona=PersonaS;
    this.unaPersona = new Persona();
    this.laPersona = new Persona();
    this.laPersona.nombre = "";
    this.laPersona.password = "";
    this.laPersona.mail = "";
    this.laPersona.sexo = "";
  }

  traerTodo(){
    this.listadoDePersonas = null;
    this.miServicioPersona.TraerDatos()
    .then(datos=>{
      //console.info("listado de personas",datos);
      this.listadoDePersonas=datos;
    });
  }

  NuevoCheck(){
    if(this.nuevoChecked)
    {
      this.nuevoChecked = false;
      this.mostrarForm = false;
    }  
    else 
      {
        this.nuevo = true;
        this.nuevoChecked = true;
        this.mostrarForm = true;
        this.unaPersona.nombre = "";
        this.unaPersona.password ="";
        this.unaPersona.mail = "";
        this.unaPersona.pathFoto = "";
        this.unaPersona.sexo = "";
      }
  }

  Guardar(){
    this.unaPersona.pathFoto= '../../../assets/imagenes/test.jpg';
    if(this.nuevo)//console.log(this.pathFoto); 
      this.miServicioPersona.GuardarDatos(this.unaPersona);
    else
      this.miServicioPersona.ModificarDatos(this.unaPersona);
    
    this.mostrarForm  = false;
    this.nuevoChecked = false;
    this.mensaje="¡Elemento guardado!";    
        var x = document.getElementById("snackbar");
        x.className = "show Ganador";
     setTimeout(function(){ 
        x.className = x.className.replace("show", "");
     }, 3000);

     this.traerTodo();
  }

  Borrar(n: string){
    this.miServicioPersona.BorrarDatos(n);
    this.mensaje="¡Elemento borrado!";    
        var x = document.getElementById("snackbar");
        x.className = "show Perdedor";
     setTimeout(function(){ 
        x.className = x.className.replace("show", "");
     }, 3000);
     this.traerTodo();
  }

  Modificar(n: number){
    this.nuevo = false;
    this.mostrarForm = true;
    
    this.miServicioPersona.TraerUno(n.toString())
   .then(datos=>{
    this.unaPersona.id = n.toString();
    this.unaPersona.nombre = datos['nombre'];
    this.unaPersona.password = datos['password'];
    this.unaPersona.sexo =  datos['sexo'];
    this.unaPersona.mail =  datos['mail'];
  });
  }

  
  
  irAMostrar(unaPersona: Persona){
    this.laPersona = unaPersona;
    this.irA = true;
  }
  ngOnInit() {
  }

}
