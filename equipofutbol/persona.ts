export class Persona {
  protected nombre: string;
  protected dni: number;

  constructor(nombre:string, dni:number) {

    this.nombre = nombre;
    this.setDni(dni);
  
  }

  public setDni(dni : number) {
    if(dni>0)
      this.dni= dni;
  }
}
