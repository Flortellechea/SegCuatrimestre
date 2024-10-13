import { Auto } from './auto';
import { Moto } from './moto';
import { Camion } from './camion';
import { RegistroAutomotor } from './registroAutomotor';

const registro = new RegistroAutomotor();

const fiesta = new Auto('Ford', 'Fiesta', 'AA854PP', 'Compact', 'GNC');
const virtus = new Auto('VolksWagen', 'Virtus', 'AF888PP', 'Sedan 4P', 'Nafta');
const cronos = new Auto('Fiat', 'Chronos', 'AB555GT', 'Sedan 4P', 'Nafta');

const honda = new Moto('Honda', 'Spirit', 'RTX760', 250);
const scania = new Camion('Scania', 'Joy', 'AF43588', 18000);

registro.agregarVehiculo(fiesta);
registro.agregarVehiculo(fiesta); // debe dar error
registro.agregarVehiculo(virtus);
registro.agregarVehiculo(cronos);
registro.modificarVehiculo(honda); // debe dar error
registro.agregarVehiculo(honda);
registro.agregarVehiculo(scania);

console.log(registro.getVehiculos());

const virtus2 = new Auto('VolksWagen', 'Virtus', 'AF888PP', 'Sedan 4P', 'GNC');
registro.modificarVehiculo(virtus2);
console.log(registro.getVehiculos());

registro.eliminarVehiculo(cronos);
console.log(registro.getVehiculos());
