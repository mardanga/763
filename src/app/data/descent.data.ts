
import { Lista } from './../clases/lista';

export const descentLista = new Lista("DESCENT");
descentLista.componente = "DescentPage";
descentLista.items.push(
  {
    completado: false,
    nombre: "MCP ALT",
    estado: "set",
    aclaracion:"Approximately 30nm back of the T/D"
  },
  {
    completado: false,
    nombre: "altimeters",
    estado: "set",
    aclaracion:"At level transition change to local altimeter"
  },
  {
    completado: false,
    nombre: "Landing Wing Lights",
    estado: "on",
    aclaracion:"Below 10,000 feet"
  },
  {
    completado: false,
    nombre: "FMC",
    estado: "Set",
    aclaracion: "Arrival and approach"
  },
  {
    completado: false,
    nombre: "Autobrakes",
    estado: "as required"
  },
  {
    completado: false,
    nombre: "FMC APPR REF",
    estado: "set"
  },
  {
    completado: false,
    nombre: "Minimuns",
    estado: "set"
  },
  {
    completado: false,
    nombre: "ILS FREQ",
    estado: "set"
  }

);

