
import { Lista } from './../clases/lista';

export const afterTOLista = new Lista("AFTER TAKEOFF");
afterTOLista.componente = "AftertoPage";
afterTOLista.items.push(
  {
    completado: false,
    nombre: "Landing Gear",
    estado: "off"
  },
  {
    completado: false,
    nombre: "Flaps",
    estado: "Retract upon acceleration"
  },
  {
    completado: false,
    nombre: "Landing Gear",
    estado: "off"
  },
  {
    completado: false,
    nombre: "Flaps",
    estado: "Retract upon acceleration"
  },
  {
    completado: false,
    nombre: "AUTOBRAKE",
    estado: "off"
  },
  {
    completado: false,
    nombre: "ENGINE START SW",
    estado: "OFF",
    aclaracion:"set CONT If anti-ice ON"
  },
  {
    completado: false,
    nombre: "ALTIMETER",
    estado: "set std after TA"
  },
  {
    completado: false,
    nombre: "VNAV",
    estado: "ON (over 1000 ft)"
  },
  {
    completado: false,
    nombre: "LANDING/TAXI LIGHTS",
    estado: "off (over 10000 ft)"
  },
  {
    completado: false,
    nombre: "NO SMOKING/FASTEN BELTS",
    estado: "off (over 10000 ft)"
  }
  
);

