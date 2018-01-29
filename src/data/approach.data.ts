
import { Lista } from './../clases/lista';

export const approachLista = new Lista("APPROACH");
approachLista.componente = "ApproachPage";
approachLista.items.push(
  {
    completado: false,
    nombre: "WHITE MARK",
    estado: "LANDING FLAP & GEAR",
    //aclaracion:"Verify approach ref data"
  },
  {
    completado: false,
    nombre: "ILS FREQ",
    estado: "set",
    aclaracion:"Set NAV1 – NAV2"
  },
  {
    completado: false,
    nombre: "mcp app",
    estado: "on" ,
    aclaracion:"When over Localizer"   
  },
  {
    completado: false,
    nombre: "MCP SPEED",
    estado: "set vref +5",
    
    
  },
  {
    completado: false,
    nombre: "SPOILERS",
    estado: "arm"
  },
  {
    completado: false,
    nombre: "ENGINE START SW",
    estado: "cont",
    aclaracion:"establishied on loc, set missed approach alt"
  },
  {
    completado: false,
    nombre: "ENGINE INDICATOR",
    estado: "confrm G/A",
    
  },
  {
    completado: false,
    nombre: "ND DISPLAY",
    estado: "app",
  }
);

