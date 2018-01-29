
import { Injectable } from '@angular/core';
import {Platform, AlertController} from 'ionic-angular';

//clases
import { Lista } from './../clases/lista';


//data
import { preflightLista } from './../data/pre.data';
import { bseLista } from "../data/beforeStartEng.data";
import { startEnginesLista } from "../data/startEngines.data";
import { beforeTOLista } from "../data/beforeTakeoff.data";
import { afterTOLista } from "../data/afterTO.data";
import { cruiseLista } from "../data/climbcruise.data";
import { descentLista } from "../data/descent.data";
import { approachLista } from './../data/approach.data';
import { landingLista } from "../data/landing.data";
import { shutdownLista } from './../data/shutdown.data';
import { secureLista } from "../data/secure.data";

import { Storage } from '@ionic/storage';


@Injectable()
export class PendientesService {

  listas:Lista[] = [];
  private version = "1";//Math.random().toString();
  constructor(private alertCtr: AlertController,
    private platform: Platform,
    private storage: Storage
  ) {
    
    this.cargarListas();
    console.log("PendientesService inicializado");
  }

  actualizarListas(){
    if(this.platform.is('cordova')){
      this.storage.set('738', this.listas);
    }
    else{
      localStorage.setItem("738", JSON.stringify(this.listas));
    }    
  }

  cargarListas(){
    if(this.platform.is('cordova'))
    {
      this.storage.get("version_738").then(
        (version)=> 
        {
          if(version != this.version)
            this.inicializarListas();
          else{
            this.storage.get("738").then(
            (val)=> 
            { 
              this.listas = val;
            }
            )
          }
        }
      );
    }
    else{
      if(localStorage.getItem("738") && localStorage.getItem("version_738") == this.version){
        this.listas = JSON.parse(localStorage.getItem("738"));
      }
      else
      {
        this.inicializarListas();
      }
    }
  }
  


  inicializarListas(borrar = false){ 
    let promesa = new Promise( (resolve, reject) =>{
      if(borrar){   
        this.alertCtr.create(
          {
            title: 'Reiniciar',
            message: 'Reiniciar los checklist?',
            buttons: [
              {
                text: 'NO',
                handler: ()=> resolve(false)
              },
              {
                text: 'SI',
                handler: ()=> {
                  if(this.platform.is('cordova')){
                    this.storage.get("738").then(
                      (val)=> {
                        this.listas = val;
                        this.listas.forEach(l => {
                          l.completada = false;
                          l.items.forEach(i => {
                            i.completado = false;
                          });
                        });
                        this.actualizarListas();
                        resolve(true);
                      });           
                    }
                    else{
                      this.listas = JSON.parse(localStorage.getItem("738"));
                      this.listas.forEach(l => {
                        l.completada = false;
                        l.items.forEach(i => {
                          i.completado = false;
                        });
                      });
                      this.actualizarListas();
                      resolve(true);
                    }
                  }
                }
            ]
          }
        ).present();
      }
      else{
        this.cargarData();
        resolve(true);
      }
    })

    return promesa;
  }

  cargarData(){
    this.listas.push(preflightLista);
    this.listas.push(bseLista);
    this.listas.push(startEnginesLista);
    this.listas.push(beforeTOLista);
    this.listas.push(afterTOLista);
    this.listas.push(cruiseLista);    
    this.listas.push(descentLista); 
    this.listas.push(approachLista); 
    this.listas.push(landingLista); 
    this.listas.push(shutdownLista); 
    this.listas.push(secureLista); 
    this.actualizarListas();
    if(this.platform.is('cordova')){
      this.storage.set('version_738', this.version);
    }
    else{
      localStorage.setItem("version_738", this.version);
    }
    
  }

  
}
