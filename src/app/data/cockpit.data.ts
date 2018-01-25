
import { Lista } from './../clases/lista';

export const cockpitLista = new Lista("COCKPIT PREPARATION");
cockpitLista.componente = "CockpitPage";
cockpitLista.items.push(
  {
    completado: false,
    nombre: "Yaw Damper Switches",
    estado: "on"
  },
  {
    completado: false,
    nombre: "EEC Switches",
    estado: "auto"
  },
  {
    completado: false,
    nombre: "Primary engine pumps switches",
    estado: "on"
  },
  {
    completado: false,
    nombre: "demand pump switches",
    estado: "off"
  },
  {
    completado: false,
    nombre: "HF Radio",
    estado: "off"
  },
  {
    completado: false,
    nombre: "Battery Switch",
    estado: "on"
  },
  {
    completado: false,
    nombre: "Standby Power Selector",
    estado: "auto"
  },
  {
    completado: false,
    nombre: "electrical switches",
    estado: "in"
  },
  {
    completado: false,
    nombre: "APU",
    estado: "as required"
  },
  {
    completado: false,
    nombre: "Cockpit Voice Recorder",
    estado: "test"
  },
  {
    completado: false,
    nombre: "Emergency Light Switch",
    estado: "armed"
  },
  {
    completado: false,
    nombre: "Passenger Oxygen Switch",
    estado: "blank"
  },

  {
    completado: false,
    nombre: "Ram Air Turbine Switch",
    estado: "blank"
  },
  {
    completado: false,
    nombre: "Ignition Switch",
    estado: "Set",
    aclaracion: "1 odd / 2 even / both cold"
  },
  {
    completado: false,
    nombre: "Engine Start Selectors",
    estado: "auto"
  },
  {
    completado: false,
    nombre: "Fuel Jettison Panel",
    estado: "off"
  },
  {
    completado: false,
    nombre: "Fwd and Aft main fuel pumps",
    estado: "off"
  },

  {
    completado: false,
    nombre: "Center fuel pumps",
    estado: "off"
  },
  {
    completado: false,
    nombre: "Crossfeed switches",
    estado: "off"
  },
  {
    completado: false,
    nombre: "Fuel quantity and balance",
    estado: "check"
  },
  {
    completado: false,
    nombre: "Engine and Wing Anti-Ice",
    estado: "off"
  },
  {
    completado: false,
    nombre: "Position lights",
    estado: "on"
  },

  //
  {
    completado: false,
    nombre: "Cargo Heat",
    estado: "off"
  },
  {
    completado: false,
    nombre: "Window Heat",
    estado: "on"
  },
  {
    completado: false,
    nombre: "Passenger No smoking Signs",
    estado: "on"
  },
  {
    completado: false,
    nombre: "Passenger seatbelts Signs",
    estado: "off"
  },
  {
    completado: false,
    nombre: "landing altitude",
    aclaracion: "AUTO 1 odd days / AUTO 2 even days",
    estado: "Set"
  },

  {
    completado: false,
    nombre: "Equipment Cooling Switch",
    estado: "auto"
  },
  {
    completado: false,
    nombre: "Temperature Control Knobs",
    estado: "as required"
  },
  {
    completado: false,
    nombre: "Trim Air Switch",
    estado: "on"
  },
  {
    completado: false,
    nombre: "Recirc Fan Switches",
    estado: "on"
  },
  {
    completado: false,
    nombre: "Pack Control Selectors",
    estado: "as required",
    aclaracion: "APU is in use, turn the pack switches to AUTO. If external air is in use, turn pack switches OFF"
  },

  //aca
  //
  {
    completado: false,
    nombre: "Isolation switches",
    estado: "on",
    aclaracion: "Left and Right switch ON. Center switch guarded ON"
  },
  {
    completado: false,
    nombre: "Engine Bleed Switches",
    estado: "on"
  },
  {
    completado: false,
    nombre: "APU Bleed Switch",
    estado: "on"
  },
  {
    completado: false,
    nombre: "FMC",
    estado: "program",
    aclaracion: "Pos Init, Route, Dep/Arr, Perf Init, Takeoff ref"
  },


  {
    completado: false,
    nombre: "Nav1 / Nav2 Radio",
    estado: "Set",
    aclaracion: "Manual if required, otherwise AUTO"
  },
  {
    completado: false,
    nombre: "FD Switch",
    estado: "on"
  },
  {
    completado: false,
    nombre: "A/T Switch",
    estado: "off"
  },
  {
    completado: false,
    nombre: "IAS/MACH",
    estado: "set",
    aclaracion: "Set V2 from FMC"
  },
  {
    completado: false,
    nombre: "HDG",
    estado: "as required"
  },
  {
    completado: false,
    nombre: "ALT",
    estado: "as required"
  },

  {
    completado: false,
    nombre: "Standby Engine Gauges",
    estado: "auto",
    
  },
  {
    completado: false,
    nombre: "Autobrakes",
    estado: "off"
  },
  {
    completado: false,
    nombre: "TRP",
    estado: "Set"
  },

  //2

  {
    completado: false,
    nombre: "Flap Indicator",
    estado: "Up",
    
  },
  {
    completado: false,
    nombre: "Alternate Flap Selector",
    estado: "norm"
  },
  {
    completado: false,
    nombre: "Landing Gear",
    estado: "down"
  },
  {
    completado: false,
    nombre: "GND PROX Override Switches",
    estado: "off",
    
  },
  {
    completado: false,
    nombre: "Parking Brake",
    estado: "set"
  },
  {
    completado: false,
    nombre: "Stab Trim Cutout Switches",
    estado: "norm"
  },

  {
    completado: false,
    nombre: "spoilers",
    estado: "down",
    
  },
  {
    completado: false,
    nombre: "Throttles",
    estado: "closed"
  },
  {
    completado: false,
    nombre: "Fuel Control Switches",
    estado: "cutoff"
  },
  {
    completado: false,
    nombre: "transponder",
    estado: "set",
    aclaracion: "Set to desired code and leave turned OFF or set AUTO"
  },
  {
    completado: false,
    nombre: "comm panel",
    estado: "set",
  
  },
  {
    completado: false,
    nombre: "ILS Frequency",
    estado: "as required",
    aclaracion: "Set to PARK or to required ILS frequency for departure"
  },
  {
    completado: false,
    nombre: "Aileron and Rudder Trim",
    estado: "set 0",
    
  }
);

