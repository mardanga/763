
import { Lista } from './../clases/lista';

export const landingLista = new Lista("LANDING");
landingLista.componente = "LandingPage";
landingLista.items.push(
  {
    completado: false,
    nombre: "THROTTLES",
    estado: "IDLE AT TOUCH DOWN",
  },
  {
    completado: false,
    nombre: "REVERSE",
    estado: "on",
  },
  {
    completado: false,
    nombre: "AUTOBRAKE",
    estado: "as required",
  }
);

