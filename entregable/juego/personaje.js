"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, nivel, vida) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.vida = vida;
    }
    Personaje.prototype.mostrarInfo = function () {
        return "".concat(this.nombre, " - Nivel: ").concat(this.nivel, ", Vida: ").concat(this.vida);
    };
    return Personaje;
}());
exports.Personaje = Personaje;
