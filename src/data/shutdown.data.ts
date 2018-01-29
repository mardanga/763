
import { Lista } from './../clases/lista';

export const shutdownLista = new Lista("SHUTDOWN");
shutdownLista.componente = "ShutdownPage";
shutdownLista.items.push(
  {
    completado: false,
    nombre: "AUTO THROTTLE",
    estado: "disarm",
    
  },
  {
    completado: false,
    nombre: "SPEED BRAKE LEVER",
    estado: "down",
  },
  {
    completado: false,
    nombre: "AUTOBRAKE",
    estado: "off",
  }

  ,{
    completado: false,
    nombre: "FLAPS",
    estado: "up",
  },
  {
    completado: false,
    nombre: "PROBE HEAT",
    estado: "off",
  },
  {
    completado: false,
    nombre: "ENGINE START SW",
    estado: "off",
  },{
    completado: false,
    nombre: "LANDING/STROBE LIGHTS",
    estado: "off",
  },
  {
    completado: false,
    nombre: "F/D",
    estado: "off",
  },
  {
    completado: false,
    nombre: "TCAS",
    estado: "off",
  },
  {
    completado: false,
    nombre: "PARKING BRAKES",
    estado: "set",
  },{
    completado: false,
    nombre: "CUTTOFF LEVERS",
    estado: "down",
    
  },
  {
    completado: false,
    nombre: "ANTICOLLISION LIGHTS",
    estado: "off",
  },
  {
    completado: false,
    nombre: "GROUND POWER",
    estado: "on",
  },{
    completado: false,
    nombre: "FUEL PUMPS",
    estado: "off",
    
  },
  {
    completado: false,
    nombre: "CAB/UTIL AND IFE/PASS",
    estado: "off",
  },
  {
    completado: false,
    nombre: "NO SMOKE/FASTEN BELTS",
    estado: "off",
  }
  ,{
    completado: false,
    nombre: "WINDOWS HEAT",
    estado: "off",
    
  },
  {
    completado: false,
    nombre: "ELEC1/ELEC2",
    estado: "off",
  },
  {
    completado: false,
    nombre: "DOORS",
    estado: "open",
  }
);

