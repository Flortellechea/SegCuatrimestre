class Televisor {


private estaPrendido : boolean;
private canal:number;
private volumen: number;

constructor(canal:number, volumen:number) {
  this.canal = canal;
  this.volumen = volumen;
}

getCanal():number {
  return this.canal;
}

setCanal(nuevoCanal:number):void {
  this.canal = nuevoCanal;
}

}

const televisor = new Televisor(10,50);


console.log(televisor.getCanal());
televisor.setCanal(25);
console.log(televisor.getCanal());
