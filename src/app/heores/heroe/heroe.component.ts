import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'

})
export class HeroeComponent{
    nombre : string = 'Moises';
    edad : number = 22;

    get nombreCapitalzado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return this.nombre+' - '+this.edad;
    }

    cambiarNombre():void{
        this.nombre='Spiderman';
    }
    
    cambiarEdad():void{
        this.edad = 34
    }

    

}