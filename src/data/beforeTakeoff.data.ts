
import { Lista } from './../clases/lista';

export const beforeTOLista = new Lista("BEFORE TAKEOFF");
beforeTOLista.componente = "BeforetoPage";
beforeTOLista.items.push(
  {
    completado: false,
    nombre: "PARKIN BRAKES",
    estado: "release",
  },
  {
    completado: false,
    nombre: "TAXI LIGHT (POSITION LOGO WING)",
    estado: "on",
    
  },
  
  {
    completado: false,
    nombre: "ANTI-ICE",
    estado: "as necessary"
  },
  {
    completado: false,
    nombre: "FLAPS",
    estado: "as necessary"
  },
  {
    completado: false,
    nombre: "ENGINE START SW",
    estado: "cont"
  }

  //////
  ,
  
  {
    completado: false,
    nombre: "STROBE/LANDING LIGHTS",
    estado: "on"
  },
  {
    completado: false,
    nombre: "a/t",
    estado: "arm"
  },
  {
    completado: false,
    nombre: "LNAV",
    estado: "on"
  },
  
  {
    completado: false,
    nombre: "TCAS",
    estado: "ABOVE-TA/RA"
  },
  {
    completado: false,
    nombre: "F/D",
    estado: "confirm on"
  },
  {
    completado: false,
    nombre: "CMD A",
    estado: "as necessary"
    ,aclaracion:"over 400 ft"
  }
);

