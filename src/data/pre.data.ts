import { PreflightPage } from './../pages/preflight/preflight';
import { Lista } from './../clases/lista';

export const preflightLista = new Lista("PREFLIGHT");
preflightLista.componente = "preflightpage";
preflightLista.items.push(

{
  completado: false,
  nombre: "route",
  estado: "calculated"
},
{
  completado: false,
  nombre: "fuel",
  estado: "calculated, set",
  
},
{
  completado: false,
  nombre: "pax load",
  estado: "set"
},
{
  completado: false,
  nombre: "batery",
  estado: "on"
},
{
  completado: false,
  nombre: "Standby Power",
  estado: "guard closed"
},
{
  completado: false,
  nombre: "TEST FIRE WRN",
  estado: "1 - 2"
},
{
  completado: false,
  nombre: "ENGINE TEST",
  estado: "1 - 2"
}
,
{
  completado: false,
  nombre: "FUEL PUMPS",
  estado: "set"
  ,aclaracion:"FWD LEFT ON, CENTEr left on"
},
{
  completado: false,
  nombre: "apu",
  estado: "start",
  aclaracion:"EGT rise and stabilize, red light OFF, APU GEN blue light ON"
},
{
  completado: false,
  nombre: "apu gen",
  estado: "on"
},
{
  completado: false,
  nombre: "YAW DAMPER",
  estado: "on"
},
{
  completado: false,
  nombre: "CAB/UTIL",
  estado: "on"
},
{
  completado: false,
  nombre: "IFE/PASS",
  estado: "on"
},
{
  completado: false,
  nombre: "EMER EXIT LIGHTS",
  estado: "armed"
},
{
  completado: false,
  nombre: "NO SMOKING/FASTEN BELTS",
  estado: "on"
},
{
  completado: false,
  nombre: "ENGINE START",
  estado: "set",
  aclaracion:"IGN R (First fly, the rest IGN L)"
},
{
  completado: false,
  nombre: "WINDOWS HEAT",
  estado: "on"
},
{
  completado: false,
  nombre: "ELEC1/ELEC2",
  estado: "on"
}

,
{
  completado: false,
  nombre: "ISOLATION VALVE",
  estado: "open"
},
{
  completado: false,
  nombre: "ENGINE BLEED 1 – 2",
  estado: "off"
},
{
  completado: false,
  nombre: "APU BLEED",
  estado: "on"
},
{
  completado: false,
  nombre: "LPACK/RPACK",
  estado: "auto"
},
{
  completado: false,
  nombre: "PRESURIZATION",
  estado: "set",
  aclaracion:"FLT ALT Cuirse altitude, LAND ALT Destination altitude"
},
{
  completado: false,
  nombre: "FMC",
  estado: "Set",
  aclaracion:"Init ref, RTE, Dep Arr, Legs, N1 Limit"
});

