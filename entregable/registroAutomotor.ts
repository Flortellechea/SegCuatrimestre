class Vehiculo {

  protected marca: string;
  protected modelo: string;
  protected patente: string;

  constructor(marca: string, modelo: string, patente: string) {
      this.marca = marca;
      this.modelo = modelo;
      this.patente = patente;
  }

  setMarca(marca: string):void {
     this.marca = marca; 
  }

  setModelo(modelo: string):void {
      this.modelo = modelo; 
   }

   setPatente(patente: string):void {
      this.patente = patente; 
   }

   getMarca():string {
      return this.marca;
   }

   getPatente():string {
      return this.patente;
   }

   getModelo():string {
      return this.modelo;
   }
}

class Auto extends Vehiculo {
  tipo:string;
  combustible: string;

  constructor(marca: string, modelo: string, patente: string,  tipo:string, combustible: string) {
    super(marca, modelo, patente);
    this.tipo = tipo;
    this.combustible = combustible;
  }

  setTipo(tipo: string):void {
    this.tipo = tipo; 
 }

 getTipo():string {
    return this.tipo;
 }

 setCombustible(combustible: string):void {
    this.combustible = combustible; 
 }

 getCombustible():string {
    return this.combustible;
 }
}

class Moto extends Vehiculo {
 cilindrada:number;
 

 constructor(marca: string, modelo: string, patente: string,  cilindrada:number) {
   super(marca, modelo, patente);
   this.cilindrada = cilindrada;
 }

 setCilindrada(cilindrada: number):void {
   this.cilindrada = cilindrada; 
}

getCilindrada():number {
   return this.cilindrada;
}

}

class Camion extends Vehiculo {
 cargaMaxima:number;
 constructor(marca: string, modelo: string, patente: string,  cargaMaxima:number) {
   super(marca, modelo, patente);
   this.cargaMaxima = cargaMaxima;
 }

 setCargaMaxima(cargaMaxima: number):void {
   this.cargaMaxima = cargaMaxima; 
}

getCargaMaxima():number {
   return this.cargaMaxima;
}

}

class RegistroAutomotor {
 vehiculos: Vehiculo[];

 constructor() {
    this.vehiculos = [];
 }

 getVehiculos(): Vehiculo[] {
    return this.vehiculos;
 }

 agregarVehiculo(vehiculo: Vehiculo):void {
    let indiceArreglo = -1;
    for (let index = 0; index < this.vehiculos.length; index++) {
       const existente = this.vehiculos[index];
       if (existente.getPatente() == vehiculo.getPatente()) {
          indiceArreglo = index;
       }         
    }
    //no puedo agregar un vehiculo que ya existe
    if (indiceArreglo == -1) {
       this.vehiculos.push(vehiculo);
    } else {
       console.log(`El vehiculo ${vehiculo.getPatente()} ya se encuentra en el registro`);
    }
 }

 modificarVehiculo(vehiculo: Vehiculo):void {
    let indiceArreglo = -1;
    for (let index = 0; index < this.vehiculos.length; index++) {
       const existente = this.vehiculos[index];
       if (existente.getPatente() == vehiculo.getPatente()) {
          indiceArreglo = index;
       }         
    }
    //no puedo modificar un vehiculo que no existe
    if (indiceArreglo >= 0) {
       this.vehiculos[indiceArreglo] = vehiculo;
    } else {
       console.log(`El vehiculo ${vehiculo.getPatente()} no se encuentra en el registro`);
    }
 }

 eliminarVehiculo(vehiculo: Vehiculo):void {
    let indiceArreglo = -1;
    for (let index = 0; index < this.vehiculos.length; index++) {
       const existente = this.vehiculos[index];
       if (existente.getPatente() == vehiculo.getPatente()) {
          indiceArreglo = index;
       }         
    }
    //no puedo eliminar  un vehiculo que no existe
    if (indiceArreglo >= 0) {
       this.vehiculos.splice(indiceArreglo, 1);
    } else {
       console.log(`El vehiculo ${vehiculo.getPatente()} no se encuentra en el registro`);
    }
 }
}

const registro = new RegistroAutomotor();

const fiesta = new Auto('Ford', 'Fiesta', 'AA854PP', 'Compact', 'GNC');
const virtus = new Auto('VolksWagen', 'Virtus', 'AF888PP', 'Sedan 4P', 'Nafta');
const cronos = new Auto('Fiat', 'Chronos', 'AB555GT', 'Sedan 4P', 'Nafta');

const honda = new Moto('Honda', 'Spirit', 'RTX760', 250);

const scania = new Camion('Scania', 'Joy', 'AF43588', 18000);

registro.agregarVehiculo(fiesta);
//vericamos que de error
registro.agregarVehiculo(fiesta);
registro.agregarVehiculo(virtus);
registro.agregarVehiculo(cronos);
//verificamos la modificacion del inexistente
registro.modificarVehiculo(honda);
registro.agregarVehiculo(honda);
registro.agregarVehiculo(scania);
console.log(registro.getVehiculos());

const virtus2 = new Auto('VolksWagen', 'Virtus', 'AF888PP', 'Sedan 4P', 'GNC');
registro.modificarVehiculo(virtus2);
console.log(registro.getVehiculos());
registro.eliminarVehiculo(cronos);
console.log(registro.getVehiculos());

