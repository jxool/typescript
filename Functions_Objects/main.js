"use strict";
/**
 * Declarando funciones
 */
var heroex = "Flash";
function imprime_heroe() {
    return heroex;
}
var activar_batisenal = function () {
    return "Batiseñal activada";
};
// console.log( imprime_heroe() );
// console.log( activar_batisenal() );
/**
 * Parametros obligatorios
 */
function nombreCompleto(nombre, apellido) {
    return nombre + ' ' + apellido;
}
var nombre = nombreCompleto("clark", "kent");
console.log(nombre);
/**
 * parametro opcionales
 */
function nombreCompletoDos(nombre, apellido) {
    if (apellido) {
        return nombre + ' ' + apellido;
    }
    else {
        return nombre;
    }
}
var nombreDos = nombreCompletoDos("Barry", "Allen");
console.log(nombreDos);
/**
 * parametros por defecto
 */
function nombrePorDefecto(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = true; }
    if (capitalizado) {
        return capitalizar(nombre) + " " + capitalizar(apellido);
    }
    return nombre + " " + apellido;
}
function capitalizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}
var nombrex = nombrePorDefecto("tony", "stark", true);
console.log(nombrex);
/**
 * parametros REST
 */
function nombreRest(nombre) {
    var losDemasParametros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        losDemasParametros[_i - 1] = arguments[_i];
    }
    return nombre + " " + losDemasParametros.join(" ");
}
var supermanx = nombreRest("Clarck", "Joseph", "Kent");
console.log(supermanx);
/**
 * Tipo función
 */
var miFuncion;
miFuncion = 10;
