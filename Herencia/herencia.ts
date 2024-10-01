class Televisor {
    private estaPrendido : boolean;
    private volumenActual : number;
    private canalActual : number;
}

class SmartTv extends Televisor{
  private sistemaOperativo: string;

  constructor(volumenactual:number, canalActual:number, sistOperativo:string) {
    super(volumenactual, canalActual);
    this.sistemaOperativo = sistOperativo;
  }
  
  setSistemaOperativo(nuevoSistemaOperativo): void{
    this.sistemaOperativo = nuevoSistemaOperativo;
  }

}
let tvSmart: SmartTv = new SmartTv(10,25,"android");
console.log(tvSmart);

tvSmart.prenderApagar();

console.log(tvSmart);

tvSmart.setSistemaOperativo("windows");


