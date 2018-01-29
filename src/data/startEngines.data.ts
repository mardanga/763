
import { Lista } from './../clases/lista';

export const startEnginesLista = new Lista("START ENGINES");
startEnginesLista.componente = "StartenginesPage";
startEnginesLista.items.push(
  {
    completado: false,
    nombre: "CUTTOFF LEVERS",
    estado: "down"
  },
  {
    completado: false,
    nombre: "ENGINE START RIGHT/LEFT",
    estado: "grd",
    aclaracion:"When N2>20% then CUTTOFF LEVER UP"
  },
  {
    completado: false,
    nombre: "GEN1/GEN2",
    estado: "on"
  },
  {
    completado: false,
    nombre: "PROBE HEAT",
    estado: "on"
  },
  {
    completado: false,
    nombre: "ENGINE BLEED 1 – 2",
    estado: "on"
  }
  

  ,
  {
    completado: false,
    nombre: "LPACK/RPACK",
    estado: "auto",
    
  },
  {
    completado: false,
    nombre: "ISOLATION VALVE",
    estado: "auto"
  },
  {
    completado: false,
    nombre: "APU BLEED",
    estado: "off"
  },
  {
    completado: false,
    nombre: "APU",
    estado: "off"
  }
);

