
import { Lista } from './../clases/lista';

export const shutdownLista = new Lista("SHUTDOWN");
shutdownLista.componente = "ShutdownPage";
shutdownLista.items.push(
  {
    completado: false,
    nombre: "Parking Brake",
    estado: "set",
    
  },
  {
    completado: false,
    nombre: "APU or External Power",
    estado: "Establish",
  },
  {
    completado: false,
    nombre: "Engine Anti-Ice Switches",
    estado: "off",
  }

  ,{
    completado: false,
    nombre: "Isolation Switches (L and R)",
    estado: "on",
  },
  {
    completado: false,
    nombre: "Fuel Control Switches",
    estado: "cutoff",
  },
  {
    completado: false,
    nombre: "Seat Belt Sign",
    estado: "off",
  },{
    completado: false,
    nombre: "Hydraulic Panel",
    estado: "set",
    aclaracion:"Turn OFF Primary electric pumps and all demand pumps. Primary engine pumps are left ON."
  },
  {
    completado: false,
    nombre: "Red Anti-Collision lights",
    estado: "off",
  },
  {
    completado: false,
    nombre: "IRS Mode Selectors",
    estado: "off",
  },
  {
    completado: false,
    nombre: "Emergency Light Switch",
    estado: "off",
  },{
    completado: false,
    nombre: "Window Heat Switches",
    estado: "off",
    
  },
  {
    completado: false,
    nombre: "Cargo Heat Switches",
    estado: "off",
  },
  {
    completado: false,
    nombre: "Pack Switches",
    estado: "off",
  },{
    completado: false,
    nombre: "APU or External Power",
    estado: "off , Disconect",
    
  },
  {
    completado: false,
    nombre: "Standby Power Selector",
    estado: "off",
  },
  {
    completado: false,
    nombre: "Battery Switch",
    estado: "off",
  }
);

