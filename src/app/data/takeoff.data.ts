
import { Lista } from './../clases/lista';

export const takeoffLista = new Lista("TAKEOFF");
takeoffLista.componente = "TakeoffPage";
takeoffLista.items.push(
  {
    completado: false,
    nombre: "Exterior Lights",
    estado: "set",
    aclaracion:"Turn on landing and anti-collision lights"
  },
  {
    completado: false,
    nombre: "Primary engine pumps switches",
    estado: "on"
  },
  {
    completado: false,
    nombre: "Transponder",
    estado: "auto or on"
  },
  {
    completado: false,
    nombre: "TCAS",
    estado: "Set TA/RA"
  },
  {
    completado: false,
    nombre: "Clock ETE",
    estado: "run"
  },
  {
    completado: false,
    nombre: "Throttles",
    estado: "Advance to 70% N1"
  },
  {
    completado: false,
    nombre: "A/T",
    estado: "Arm then engage N1 mode"
  },
  {
    completado: false,
    nombre: "Positive rate of climb",
    estado: "gear up"
  },
  {
    completado: false,
    nombre: "a/p",
    estado: "as required"
  }
);

