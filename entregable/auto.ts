import { Vehiculo } from './vehiculo';

export class Auto extends Vehiculo {
    tipo: string;
    combustible: string;

    constructor(marca: string, modelo: string, patente: string, tipo: string, combustible: string) {
        super(marca, modelo, patente);
        this.tipo = tipo;
        this.combustible = combustible;
    }

    setTipo(tipo: string): void { this.tipo = tipo; }
    setCombustible(combustible: string): void { this.combustible = combustible; }

    getTipo(): string { return this.tipo; }
    getCombustible(): string { return this.combustible; }
}
