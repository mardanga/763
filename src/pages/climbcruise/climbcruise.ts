import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Lista } from "../../app/clases/lista";
import { PendientesService } from "../../app/services/pendientes.service";
import { ListaItem } from "../../app/clases/lista-item";
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-climbcruise',
  templateUrl: 'climbcruise.html',
})
export class ClimbcruisePage {

  
  private nombreLista;
  lista: Lista;

  constructor(private psrv:PendientesService, 
  private navParams: NavParams,
  private nav: NavController
  ) { 
    this.nombreLista = navParams.get("nombre");
  }
  
  ionViewWillEnter(){
    this.lista = this.psrv.listas.filter(p=> p.nombre === this.nombreLista)[0];
  }
  
  itemClick(item: ListaItem){
    item.completado = !item.completado; 
    
    let pendientes = false;
    this.lista.items.forEach(element => {
      if(!element.completado)
        {
          pendientes=true;
        }
    });
    this.lista.completada = !pendientes;
    


    this.psrv.actualizarListas();
  }

  reiniciarListas(){
    this.psrv.inicializarListas(true).then(
      ()=> {
        this.nav.setRoot(HomePage);
      }
    );
  }

  irSiguienteLista(){
    this.nav.setRoot("DescentPage", {nombre: "DESCENT"});
  }


}