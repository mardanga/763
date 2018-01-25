
import { Lista } from './../clases/lista';

export const landingLista = new Lista("LANDING");
landingLista.componente = "LandingPage";
landingLista.items.push(
  {
    completado: false,
    nombre: "Flaps",
    estado: "set",
  },
  {
    completado: false,
    nombre: "landing gear ",
    estado: "down",
  },
  {
    completado: false,
    nombre: "Speed brakes",
    estado: "armed",
  }
);

