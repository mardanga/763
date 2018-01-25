
import { Lista } from './../clases/lista';

export const bseLista = new Lista("BEFORE START ENGINES");
bseLista.componente = "BeforesePage";
bseLista.items.push(
  {
    completado: false,
    nombre: "Cargo Heat Switches",
    estado: "on"
  },
  {
    completado: false,
    nombre: "Passenger Signs",
    estado: "on",
    aclaracion: "Press the ALERT button on the Communications panel to notify the F/A’s that it’s time to go"
  },
  {
    completado: false,
    nombre: "Hydraulic Panel",
    estado: "on & auto",
    aclaracion: "Primary electric pumps ON & demand pumps to AUTO"
  },
  {
    completado: false,
    nombre: "Fuel Panel",
    estado: "set",
    aclaracion: "Turn ON fuel pumps in all tanks with fuel. Center Pumps should be OFF"
  },
  {
    completado: false,
    nombre: "Red Anti-collision Lights",
    estado: "on"
  },
  {
    completado: false,
    nombre: "Pack Switches",
    estado: "off"
  },
  {
    completado: false,
    nombre: "Stabilizer Trim",
    estado: "set"
  },
  {
    completado: false,
    nombre: "Flight Controls",
    estado: "check"
  },
  {
    completado: false,
    nombre: "Doors",
    estado: "close, lights out"
  }
);

