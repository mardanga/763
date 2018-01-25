
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
  }
  
);

