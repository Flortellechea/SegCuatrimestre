import { Vehiculo } from './vehiculo';

export class Moto extends Vehiculo {
    cilindrada: number;

    constructor(marca: string, modelo: string, patente: string, cilindrada: number) {
        super(marca, modelo, patente);
        this.cilindrada = cilindrada;
    }

    setCilindrada(cilindrada: number): void { this.cilindrada = cilindrada; }
    getCilindrada(): number { return this.cilindrada; }
}
