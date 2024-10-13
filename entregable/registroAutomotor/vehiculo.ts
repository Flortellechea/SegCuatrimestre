export class Vehiculo {
  protected marca: string;
  protected modelo: string;
  protected patente: string;

  constructor(marca: string, modelo: string, patente: string) {
      this.marca = marca;
      this.modelo = modelo;
      this.patente = patente;
  }

  setMarca(marca: string): void { this.marca = marca; }
  setModelo(modelo: string): void { this.modelo = modelo; }
  setPatente(patente: string): void { this.patente = patente; }

  getMarca(): string { return this.marca; }
  getModelo(): string { return this.modelo; }
  getPatente(): string { return this.patente; }
}