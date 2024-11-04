import {Personaje} from './personaje'

export class Mago extends Personaje {
  private magia: number;

  constructor(nombre: string, nivel: number, vida: number, magia: number) {
      super(nombre, nivel, vida);
      this.magia = magia;
  }

  public atacar(): number {
    console.log(`${this.nombre} lanza un hechizo! Daño: ${this.magia * this.nivel}`);
    return this.magia * this.nivel;
  }

  public defender(ataque: number): void {
    console.log(`${this.nombre} se defiende quedando la vida en ${this.vida - ataque}`);
    this.vida = this.vida - ataque;
  }

  public evolucionar(): void {
      this.nivel++;
     
}
}