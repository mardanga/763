
import { Lista } from './../clases/lista';

export const descentLista = new Lista("DESCENT");
descentLista.componente = "DescentPage";
descentLista.items.push(
  {
    completado: false,
    nombre: "ANTI-ICE",
    estado: "as required",
    
  },
  {
    completado: false,
    nombre: "FMC",
    estado: "set",
    aclaracion:"REVIEW SPEED/ALTITUDE RESTRICTIONS Reduce pitch (20º/2) to acelerate, o FORECAST WINDS AND TA Retract flaps o INTRODUCE STAR AND APPROACH o INIT REF page"  
  },
  {
    completado: false,
    nombre: "TCAS",
    estado: "below",
    
  },
  {
    completado: false,
    nombre: "AUTOBRAKE",
    estado: "as necessary",
    
  },
  {
    completado: false,
    nombre: "ALTIMETER",
    estado: "set at tl"
  },
  {
    completado: false,
    nombre: "ALTITUDE SELECTOR",
    estado: "SET TO APP ALT"
  },
  {
    completado: false,
    nombre: "LANDING/TAXI LIGHTS",
    estado: "ON (Below 10000ft)"
  },
  {
    completado: false,
    nombre: "NO SMOKING/FASTEN BELTS",
    estado: "ON (Below 10000ft)"
  }

);

