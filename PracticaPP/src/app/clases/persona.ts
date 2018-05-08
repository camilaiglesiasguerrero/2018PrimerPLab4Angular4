export class Persona {
    id: string;
    nombre: string="";
    mail:string="";
    sexo: string="";
    password:string="";
    pathFoto: string ="";

    constructor() {
    }
    
    public GuardarLocalStorage(unUser: Persona)
    {
        localStorage.setItem('Usuario',JSON.stringify(unUser));
    }
}
