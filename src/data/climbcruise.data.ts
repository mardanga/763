
import { Lista } from './../clases/lista';

export const cruiseLista = new Lista("CRUISE");
cruiseLista.componente = "ClimbcruisePage";
cruiseLista.items.push(
  {
    completado: false,
    nombre: "ANTI-ICE",
    estado: "as required"
  },
  {
    completado: false,
    nombre: "TCAS",
    estado: "neutral",
  },
  {
    completado: false,
    nombre: "FMC",
    estado: "verify",
    aclaracion:"LEGS page review fp contency"
  }
); 

