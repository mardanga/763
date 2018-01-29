
import { Lista } from './../clases/lista';

export const secureLista = new Lista("SECURE");
secureLista.componente = "SecurePage";
secureLista.items.push(
  {
    completado: false,
    nombre: "LPACK/RPACK",
    estado: "off"
  },
  {
    completado: false,
    nombre: "ISOLATION VALVE",
    estado: "close"
  },
  {
    completado: false,
    nombre: "EMER EXIT LIGHTS",
    estado: "off"
  },
  {
    completado: false,
    nombre: "ALL LIGHTS",
    estado: "off"
  },
  {
    completado: false,
    nombre: "GROUND POWER",
    estado: "off"
  },
  {
    completado: false,
    nombre: "Battery Switch",
    estado: "off"
  }
);

