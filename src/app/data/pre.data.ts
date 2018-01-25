import { PreflightPage } from './../../pages/preflight/preflight';
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
  nombre: "Standby Power Selector",
  estado: "auto"
},
{
  completado: false,
  nombre: "APu gen switch",
  estado: "IN"
},
{
  completado: false,
  nombre: "bus tie switches",
  estado: "auto"
},
{
  completado: false,
  nombre: "utility bus switches",
  estado: "on"
},
{
  completado: false,
  nombre: "gen cont switch",
  estado: "IN"
},
{
  completado: false,
  nombre: "external power",
  estado: "establish"
},
{
  completado: false,
  nombre: "apu",
  estado: "start, on"
},
{
  completado: false,
  nombre: "position light",
  estado: "on"
},
{
  completado: false,
  nombre: "irs selectors",
  estado: "nav"
},
{
  completado: false,
  nombre: "fmc initialization",
  estado: "set position"
},
{
  completado: false,
  nombre: "gen cont switch",
  estado: "IN"
});

