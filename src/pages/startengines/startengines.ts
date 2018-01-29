import { HomePage } from './../home/home';

import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';


import { Lista } from './../../clases/lista';
import { ListaItem } from './../../clases/lista-item';
import { PendientesService } from './../../services/pendientes.service';


@IonicPage()
@Component({
  
  selector: 'startEnginespage',
  templateUrl: 'startengines.html',
})
export class StartenginesPage {
  
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
    this.nav.setRoot("BeforetoPage", {nombre: "BEFORE TAKEOFF"});
  }
}


