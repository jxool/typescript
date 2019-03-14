"use strict";
function regresar(arg) {
    return arg;
}
console.log(regresar(15.456789).toFixed(2));
console.log(regresar("Ricardo Tapia").charAt(0));
/**
 * Función generica en acción
 */
function functionGenerica(arg) {
    return arg;
}
var deadpool = {
    nombre: "Deadpool",
    nombreReal: "Wde Winston Wilson",
    poder: "Regeneración"
};
console.log(functionGenerica(deadpool).nombre);
/**
 * Arreglos genéricos
 */
var heroesG = ["Flash", "Batman", "Superman"];
heroesG.push("123");
var villanosG = ["Lex Luthor", "Flash Reverso"];
/**
 * Clases genéricas
 */
var Cuadrado = /** @class */ (function () {
    function Cuadrado() {
    }
    Cuadrado.prototype.area = function () {
        return +this.base * +this.altura;
    };
    return Cuadrado;
}());
var cuadrado = new Cuadrado();
cuadrado.base = "10";
cuadrado.altura = 10;
console.log(cuadrado.area());
