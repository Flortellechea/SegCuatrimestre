import {Personaje} from './personaje'

export class Arquero extends Personaje {
  private fuerza: number;

  constructor(nombre: string, nivel: number, vida: number, fuerza: number) {
      super(nombre, nivel, vida);
      this.fuerza = fuerza;
  }

  public atacar(): number {
      console.log(`${this.nombre} ataca con su flecha! Daño: ${this.fuerza * this.nivel}`);
      return this.fuerza * this.nivel;
  }

  public defender(ataque: number): void {
    console.log(`${this.nombre} se defiende quedando la vida en ${this.vida - ataque}`);
    this.vida = this.vida - ataque;
  }

  public evolucionar(): void {
      this.nivel++;
  }
}