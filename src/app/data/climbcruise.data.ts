
import { Lista } from './../clases/lista';

export const climbcruiseLista = new Lista("CLIMB AND CRUISE");
climbcruiseLista.componente = "ClimbcruisePage";
climbcruiseLista.items.push(
  {
    completado: false,
    nombre: "Landing lights",
    estado: "off",
    aclaracion:" Above 10000 fts"
  },
  {
    completado: false,
    nombre: "Set altimeters",
    estado: "29.92 / 1013",
    aclaracion:"At transition altitud"
  }
);

