import { Vehiculo } from './vehiculo';

export class RegistroAutomotor {
   vehiculos: Vehiculo[];

   constructor() {
      this.vehiculos = [];
    }

   getVehiculos(): Vehiculo[] { return this.vehiculos; }

   agregarVehiculo(vehiculo: Vehiculo): void {
        if (!this.vehiculos.some(v => v.getPatente() === vehiculo.getPatente())) {
            this.vehiculos.push(vehiculo);
        } else {
            console.log(`El vehiculo ${vehiculo.getPatente()} ya se encuentra en el registro`);
        }
    }

   modificarVehiculo(vehiculo: Vehiculo): void {
        const indiceArreglo = this.vehiculos.findIndex(v => v.getPatente() === vehiculo.getPatente());
     if (indiceArreglo >= 0) {
            this.vehiculos[indiceArreglo] = vehiculo;
   } else {
            console.log(`El vehiculo ${vehiculo.getPatente()} no se encuentra en el registro`);
   }
}
   eliminarVehiculo(vehiculo: Vehiculo): void {
        const indiceArreglo = this.vehiculos.findIndex(v => v.getPatente() === vehiculo.getPatente());
        if (indiceArreglo >= 0) {
            this.vehiculos.splice(indiceArreglo, 1);
        } else {
            console.log(`El vehiculo ${vehiculo.getPatente()} no se encuentra en el registro`);
        }
    }
}
