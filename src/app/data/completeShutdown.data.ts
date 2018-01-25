
import { Lista } from './../clases/lista';

export const completeshutdownLista = new Lista("COMPLETE SHUTDOWN");
completeshutdownLista.componente = "CompleteshutdownPage";
completeshutdownLista.items.push(
 
  {
    completado: false,
    nombre: "IRS Mode Selectors",
    estado: "off",
  },
  {
    completado: false,
    nombre: "Emergency Light Switch",
    estado: "off",
  },{
    completado: false,
    nombre: "Window Heat Switches",
    estado: "off",
    
  },
  {
    completado: false,
    nombre: "Cargo Heat Switches",
    estado: "off",
  },
  {
    completado: false,
    nombre: "Pack Switches",
    estado: "off",
  },{
    completado: false,
    nombre: "APU or External Power",
    estado: "off , Disconect",
    
  },
  {
    completado: false,
    nombre: "Standby Power Selector",
    estado: "off",
  },
  {
    completado: false,
    nombre: "Battery Switch",
    estado: "off",
  }
);

