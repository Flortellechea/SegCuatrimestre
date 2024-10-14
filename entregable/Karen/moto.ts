import { Vehiculo } from "./vehiculo";

export class Moto extends Vehiculo {
  private tipo: string;
  constructor(patente: string, marca: string, modelo: string, tipo: string) {
      super(patente, marca, modelo);
      this.tipo = tipo;
  }

  mostrarInfo(): string {
      return `${super.mostrarInfo()} - Tipo: ${this.tipo}`;
  }


}