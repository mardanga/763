import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { PendientesService } from './../../services/pendientes.service';
import { Lista } from './../../clases/lista';
import { ListaItem } from "../../clases/lista-item";
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  
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
    this.nav.setRoot("ShutdownPage", {nombre: "SHUTDOWN"});
  }

}