import { Vehiculo } from './vehiculo';

export class Camion extends Vehiculo {
    cargaMaxima: number;

    constructor(marca: string, modelo: string, patente: string, cargaMaxima: number) {
        super(marca, modelo, patente);
        this.cargaMaxima = cargaMaxima;
    }

    setCargaMaxima(cargaMaxima: number): void { this.cargaMaxima = cargaMaxima; }
    getCargaMaxima(): number { return this.cargaMaxima; }
}
