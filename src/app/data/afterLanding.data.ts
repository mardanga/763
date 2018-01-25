
import { Lista } from './../clases/lista';

export const afterLandingLista = new Lista("AFTER LANDING");
afterLandingLista.componente = "AfterlandingPage";
afterLandingLista.items.push(
  {
    completado: false,
    nombre: "Exterior Lights",
    estado: "as required",
    aclaracion:"Landing lights OFF. Nosegear can stay ON. White anti-collision lights OFF. Runway turn-off lights ON."
  },
  {
    completado: false,
    nombre: "Flight Director Switches",
    estado: "off",
  },
  {
    completado: false,
    nombre: "Autobrakes",
    estado: "off",
  }

  ,{
    completado: false,
    nombre: "Speed brakes",
    estado: "down",
  },
  {
    completado: false,
    nombre: "Stab Trim",
    estado: "4 units",
  },
  {
    completado: false,
    nombre: "Flaps",
    estado: "up",
  },{
    completado: false,
    nombre: "Transponder",
    estado: "off",
  },
  {
    completado: false,
    nombre: "APU",
    estado: "as required",
    aclaracion: "Start APU prior to arrival if external power is not available"
  }
);

