export abstract class Personaje {
  protected nombre: string;
  protected nivel: number;
  protected vida: number;

  constructor(nombre: string, nivel: number, vida: number) {
      this.nombre = nombre;
      this.nivel = nivel;
      this.vida = vida;
  }

  public mostrarInfo(): string {
      return `${this.nombre} - Nivel: ${this.nivel}, Vida: ${this.vida}`;
  }

  abstract atacar(): number;

  abstract defender(ataque: number): void;

  abstract evolucionar(): void;
}
