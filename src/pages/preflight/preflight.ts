import { HomePage } from './../home/home';

import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';


import { Lista } from './../../clases/lista';
import { ListaItem } from './../../clases/lista-item';
import { PendientesService } from './../../services/pendientes.service';


@IonicPage({name: 'preflightpage'})
@Component({
  
  selector: 'preflightpage',
  templateUrl: 'preflight.html',
})
export class PreflightPage {
  
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
    this.nav.setRoot("BeforesePage", {nombre: "BEFORE START ENGINES"});
  }
}


