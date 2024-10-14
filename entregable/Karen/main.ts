import { Camion } from "./camion";
import { Moto } from "./moto";
import { RegistroAutomotor } from "./regAutomotor";

const registro = new RegistroAutomotor();
const moto1 = new Moto('ABC123', 'Yamaha', 'MT-07', 'Deportiva');
const camion1 = new Camion('XYZ789', 'Volvo', 'FH', 18);

registro.agregarVehiculo(moto1);
registro.agregarVehiculo(camion1);

console.log(registro.getVehiculos().map(v => v.mostrarInfo())); 