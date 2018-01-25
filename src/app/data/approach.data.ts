
import { Lista } from './../clases/lista';

export const approachLista = new Lista("APPROACH");
approachLista.componente = "ApproachPage";
approachLista.items.push(
  {
    completado: false,
    nombre: "FMC",
    estado: "Verify",
    aclaracion:"Verify approach ref data"
  },
  {
    completado: false,
    nombre: "ALT",
    estado: "as required",
    aclaracion:"Set final altitude"
  },
  {
    completado: false,
    nombre: "MCP LOC",
    estado: "ON"    
  },
  {
    completado: false,
    nombre: "MCP APP",
    estado: "ON",
    aclaracion:"When over Localizer"
    
  },
  {
    completado: false,
    nombre: "SPeED bug",
    estado: "Set"
  },
  {
    completado: false,
    nombre: "MCP ALT",
    estado: "SET",
    aclaracion:"establishied on loc, set missed approach alt"
  },
  {
    completado: false,
    nombre: "Flaps",
    estado: "as required",
    
  },
);

