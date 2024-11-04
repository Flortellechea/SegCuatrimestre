import { Personaje } from "./personaje";
import { Guerrero } from "./guerrero";
import { Mago } from "./mago";
import { Arquero } from "./arquero"; 


function mostrarPersonaje(personaje: Personaje) {
  console.log(personaje.mostrarInfo());
  console.log(personaje.atacar());
}

// Ejemplo de uso
const guerrero = new Guerrero("Thor", 1, 100, 10);
const mago = new Mago("Harry", 1, 80, 15);
const arquero = new Arquero("Robin Hood", 1, 50, 20);

mostrarPersonaje(guerrero);
mostrarPersonaje(mago);
mostrarPersonaje(arquero);

guerrero.defender(arquero.atacar());
guerrero.evolucionar();

mago.atacar();
arquero.defender(mago.atacar());
arquero.evolucionar();


