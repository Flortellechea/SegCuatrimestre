import { Persona } from "./persona";
import { jugador, jugador } from "./jugador";

export class tecnico extends Persona{
  private arrJugadores:jugador[];

  constructor(nombre:string, dni:number, arrJugadores:jugador[]) {
    super(nombre,dni);
    this.arrJugadores=arrJugadores

  }

  public cambiarCapitan(jugador:jugador) {
    for (let i = 0; i < this.arrJugadores.length; i++) {
      this.arrJugadores [i].setEsCapitan(false);
      let jugador=this.arrJugadores.find(jugador=>jugador.getDni()===500000);
      
    }
    jugador.setEsCapitan(true);
  }
}

