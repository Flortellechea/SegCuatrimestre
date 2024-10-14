export class Vehiculo {
  constructor(private patente: string, private marca: string, private modelo: string) {}


  mostrarInfo(): string {
      return `${this.marca} ${this.modelo} - Patente: ${this.patente}`;
  }

  setMarca(marca: string): void { this.marca = marca; }
  setModelo(modelo: string): void { this.modelo = modelo; }
  setPatente(patente: string): void { this.patente = patente; }

  getMarca(): string { return this.marca; }
  getModelo(): string { return this.modelo; }
  getPatente(): string { return this.patente; }
}