
import { Lista } from './../clases/lista';

export const startEnginesLista = new Lista("START ENGINES");
startEnginesLista.componente = "StartenginesPage";
startEnginesLista.items.push(
  {
    completado: false,
    nombre: "Pushback",
    estado: "as required"
  },
  {
    completado: false,
    nombre: "R Start Selector",
    estado: "gnd"
  },
  {
    completado: false,
    nombre: "R Fuel Control Switch",
    estado: "RUN"
  },
  {
    completado: false,
    nombre: "L Start Selector",
    estado: "gnd"
  },
  {
    completado: false,
    nombre: "L Fuel Control Switch",
    estado: "RUN"
  }
  
);

