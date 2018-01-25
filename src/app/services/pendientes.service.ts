
import { Injectable } from '@angular/core';
import { AlertController} from 'ionic-angular';

//clases
import { Lista } from './../clases/lista';


//data
import { preflightLista } from './../data/pre.data';
import { cockpitLista } from './../data/cockpit.data';
import { bseLista } from "../data/beforeStartEng.data";
import { startEnginesLista } from "../data/startEngines.data";
import { aseLista } from "../data/afterStartEng.data";
import { beforeTOLista } from "../data/beforeTakeoff.data";
import { takeoffLista } from "../data/takeoff.data";
import { afterTOLista } from "../data/afterTO.data";
import { climbcruiseLista } from "../data/climbcruise.data";
import { descentLista } from "../data/descent.data";
import { approachLista } from './../data/approach.data';
import { landingLista } from "../data/landing.data";
import { afterLandingLista } from "../data/afterLanding.data";
import { shutdownLista } from './../data/shutdown.data';
import { completeshutdownLista } from './../data/completeShutdown.data';


@Injectable()
export class PendientesService {

  listas:Lista[] = [];
  private version = "1.0.0";
  constructor(private alertCtr: AlertController
  ) {
    
    this.cargarListas();
    console.log("PendientesService inicializado");
  }

  actualizarListas(){
    console.log(this.listas);
    localStorage.setItem("listas", JSON.stringify(this.listas));
  }

  cargarListas(){
    if(localStorage.getItem("listas") && localStorage.getItem("version") == this.version)
      this.listas = JSON.parse(localStorage.getItem("listas"));
    else
      this.inicializarListas() 
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
                handler: ()=> resolve()
              },
              {
                text: 'SI',
                handler: ()=> {
                  this.listas = JSON.parse(localStorage.getItem("listas"));
                  this.listas.forEach(l => {
                    l.completada = false;
                    l.items.forEach(i => {
                      i.completado = false;
                    });
                  });
                  this.actualizarListas();
                  resolve();
                }
              }
            ]
          }
        ).present();
      }
      else{
        this.cargarData();
        resolve();
      }
    })

    return promesa;
  }

  cargarData(){
    this.listas.push(preflightLista);
    this.listas.push(cockpitLista);
    this.listas.push(bseLista);
    this.listas.push(startEnginesLista);
    this.listas.push(aseLista);
    this.listas.push(beforeTOLista);
    this.listas.push(takeoffLista);
    this.listas.push(afterTOLista);
    this.listas.push(climbcruiseLista);    
    this.listas.push(descentLista); 
    this.listas.push(approachLista); 
    this.listas.push(landingLista); 
    this.listas.push(afterLandingLista); 
    this.listas.push(shutdownLista); 
    this.listas.push(completeshutdownLista); 
    this.actualizarListas();
    localStorage.setItem("version", this.version);
  }

  
}
