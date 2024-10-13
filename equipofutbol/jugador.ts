import { Persona } from "./persona";

export class jugador extends Persona {

  private camiseta:number;
  private posicion:string;
  private escapitan:boolean;

  constructor(camiseta:number, posicion:string, nombre:string, dni:number, escapitan:boolean) {
    super(nombre, dni)
    this.camiseta=camiseta;
    this.posicion=posicion;
    this.escapitan=escapitan;
  }3

  public getEsCapitan(): boolean {
    return this.escapitan;
  }

  public setEsCapitan(): boolean {
    return this.escapitan;

  }
  
}