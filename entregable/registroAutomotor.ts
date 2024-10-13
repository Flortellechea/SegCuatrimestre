import { Vehiculo } from './vehiculo';

export class RegistroAutomotor {
   vehiculos: Vehiculo[];

   constructor() {
      this.vehiculos = [];
    }

    getVehiculos(): Vehiculo[] {
      return this.vehiculos;
   }

   agregarVehiculo(vehiculo: Vehiculo):void {
      let indiceArreglo = -1;
      for (let index = 0; index < this.vehiculos.length; index++) {
         const existente = this.vehiculos[index];
         if (existente.getPatente() == vehiculo.getPatente()) {
            indiceArreglo = index;
         }         
      }
      //no puedo agregar un vehiculo que ya existe
      if (indiceArreglo == -1) {
         this.vehiculos.push(vehiculo);
      } else {
         console.log(`El vehiculo ${vehiculo.getPatente()} ya se encuentra en el registro`);
      }
   }

   modificarVehiculo(vehiculo: Vehiculo):void {
      let indiceArreglo = -1;
      for (let index = 0; index < this.vehiculos.length; index++) {
         const existente = this.vehiculos[index];
         if (existente.getPatente() == vehiculo.getPatente()) {
            indiceArreglo = index;
         }         
      }
      //no puedo modificar un vehiculo que no existe
      if (indiceArreglo >= 0) {
         this.vehiculos[indiceArreglo] = vehiculo;
      } else {
         console.log(`El vehiculo ${vehiculo.getPatente()} no se encuentra en el registro`);
      }
   }

   eliminarVehiculo(vehiculo: Vehiculo):void {
      let indiceArreglo = -1;
      for (let index = 0; index < this.vehiculos.length; index++) {
         const existente = this.vehiculos[index];
         if (existente.getPatente() == vehiculo.getPatente()) {
            indiceArreglo = index;
         }         
      }
      //no puedo eliminar  un vehiculo que no existe
      if (indiceArreglo >= 0) {
         this.vehiculos.splice(indiceArreglo, 1);
      } else {
         console.log(`El vehiculo ${vehiculo.getPatente()} no se encuentra en el registro`);
      }
   }
}