
import { Lista } from './../clases/lista';

export const aseLista = new Lista("AFTER START ENGINES");
aseLista.componente = "AftersePage";
aseLista.items.push(
  {
    completado: false,
    nombre: "Generator Lights",
    estado: "off"
  },
  {
    completado: false,
    nombre: "APU Switch",
    estado: "off",
  },
  {
    completado: false,
    nombre: "Engine Anti-Ice",
    estado: "oas required",
    aclaracion: "Use if temp below 10°C & visible moisture observed"
  },
  {
    completado: false,
    nombre: "Isolation Switches",
    estado: "closed",
    
  },
  {
    completado: false,
    nombre: "Pack Switches",
    estado: "auto"
  },
  {
    completado: false,
    nombre: "Autobrake Selector",
    estado: "rto"
  },
  {
    completado: false,
    nombre: "EICAS",
    estado: "RECALL & CHECK"
  },
  {
    completado: false,
    nombre: "Ground Equipment",
    estado: "Disconnect"
  },
  {
    completado: false,
    nombre: "Runway Turn-off Lights",
    estado: "on"
  },
  {
    completado: false,
    nombre: "Nose Wheel Landing Lights",
    estado: "on"
  }
);

