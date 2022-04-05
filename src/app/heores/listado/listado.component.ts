import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes:string[] =['Spidermna','Ironman','Hulk','Thor'];
  heroeBorrado: string ='';

  borrarHeroe(){
    console.log('Borrando...');
    this.heroeBorrado=this.heroes.shift()||'';
  }

  

}
