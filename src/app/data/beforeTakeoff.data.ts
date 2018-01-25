
import { Lista } from './../clases/lista';

export const beforeTOLista = new Lista("BEFORE TAKEOFF");
beforeTOLista.componente = "BeforetoPage";
beforeTOLista.items.push(
  {
    completado: false,
    nombre: "Flaps",
    estado: "set fpt takeoff",
    aclaracion: "Set 5 or 15"

  },
  {
    completado: false,
    nombre: "Flight Attendants",
    estado: "notify",
    aclaracion: "Press the ALERT button on the Communications panel"
  },
  
  {
    completado: false,
    nombre: "LNAV",
    estado: "on"
  },
  {
    completado: false,
    nombre: "vnav",
    estado: "on"
  }
);

