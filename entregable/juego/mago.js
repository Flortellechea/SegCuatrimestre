"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
var personaje_1 = require("./personaje");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre, nivel, vida, magia) {
        var _this = _super.call(this, nombre, nivel, vida) || this;
        _this.magia = magia;
        return _this;
    }
    Mago.prototype.atacar = function () {
        console.log("".concat(this.nombre, " lanza un hechizo! Da\u00F1o: ").concat(this.magia * this.nivel));
        return this.magia * this.nivel;
    };
    Mago.prototype.defender = function (ataque) {
        console.log("".concat(this.nombre, " se defiende quedando la vida en ").concat(this.vida - ataque));
        this.vida = this.vida - ataque;
    };
    Mago.prototype.evolucionar = function () {
        this.nivel++;
    };
    return Mago;
}(personaje_1.Personaje));
exports.Mago = Mago;
