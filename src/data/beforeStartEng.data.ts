
import { Lista } from './../clases/lista';

export const bseLista = new Lista("BEFORE START ENGINES");
bseLista.componente = "BeforesePage";
bseLista.items.push(
  {
    completado: false,
    nombre: "ALTIMETER",
    estado: "SET LOCAL QNH"
  },
  {
    completado: false,
    nombre: "VOR/ADF SWITCHES",
    estado: "as necessary",
    
  },
  {
    completado: false,
    nombre: "COURSE",
    estado: "set",
  },
  {
    completado: false,
    nombre: "F/D",
    estado: "on",
  },
  {
    completado: false,
    nombre: "SPEED",
    estado: "set to v2"
  },
  {
    completado: false,
    nombre: "HEADING",
    estado: "set to rwy"
  }
  ,
  {
    completado: false,
    nombre: "altitude",
    estado: "set initial alt/fl",
  },
  {
    completado: false,
    nombre: "Stab strim",
    estado: "set"
  },
  {
    completado: false,
    nombre: "LPACK/RPACK",
    estado: "off"
  }
  ,
  {
    completado: false,
    nombre: "FUEL PUMPS",
    estado: "on",
  },
  {
    completado: false,
    nombre: "ANTICOLLISION LIGHTS",
    estado: "on"
  },
  {
    completado: false,
    nombre: "AUTOBRAKE",
    estado: "rto"
  }
);

