import { Vehiculo } from "./vehiculo";

export class Camion extends Vehiculo {
  private capacidadCarga: number;
  constructor(patente: string, marca: string, modelo: string, capacidadCarga: number) {
      super(patente, marca, modelo);
      this.capacidadCarga = capacidadCarga;
  }

  mostrarInfo(): string {
      return `${super.mostrarInfo()} - Capacidad de carga: ${this.capacidadCarga} toneladas`;
  }
  
 
}