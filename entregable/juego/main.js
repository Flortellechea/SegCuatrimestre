"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guerrero_1 = require("./guerrero");
var mago_1 = require("./mago");
var arquero_1 = require("./arquero");
function mostrarPersonaje(personaje) {
    console.log(personaje.mostrarInfo());
    console.log(personaje.atacar());
}
// Ejemplo de uso
var guerrero = new guerrero_1.Guerrero("Thor", 1, 100, 10);
var mago = new mago_1.Mago("Harry", 1, 80, 15);
var arquero = new arquero_1.Arquero("Robin Hood", 1, 50, 20);
mostrarPersonaje(guerrero);
mostrarPersonaje(mago);
mostrarPersonaje(arquero);
// Evolucionar personajes
guerrero.evolucionar();
mago.evolucionar();
arquero.evolucionar();
mostrarPersonaje(guerrero);
mostrarPersonaje(mago);
mostrarPersonaje(arquero);
