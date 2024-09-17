class Persona {
  private altura : number;
  private peso : number;
  private nombre : string;
  private sexo : string;
  private dni : number;

constructor(nombre:string, dni:number){
  this.nombre=nombre;
  this.dni=dni;
}

  public getAltura():number{
    return this.altura;
  }

  public getPeso():number{
    return this.peso;
  }

  public getNombre():string{
    return this.nombre;
  }

  public setNombre(parNombre:string):void{
    this.nombre=parNombre;
  }

  public caminar():string{
    return "caminando";
  }

  public hablar():string{
    return "bla bla";
  }

  private dormir():string{
    return "zzz";
  }
}

const persona1=new Persona("Flor", 35270988)
console.log(persona1.getNombre());
