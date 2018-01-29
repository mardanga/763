import { Component } from '@angular/core';
import { ListaItem } from './lista-item';

export class Lista {
    nombre:string;
    completada:boolean;
    items: ListaItem[];
    componente:any;

    constructor(nombre:string){
      this.nombre = nombre;
      this.completada =false;
      this.items= [];
    }
}
