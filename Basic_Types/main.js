"use strict";
/**
 * Más información en: http://www.typescriptlang.org/docs/handbook/basic-types.html
 * Declaración de variables tipo boolenos
 */
var esSuperman = true;
var esBatman;
var esAcuaman = true;
if (esSuperman) {
    console.log('Estamos salvados');
}
else {
    console.log('oppps');
}
//Asiganción de variable tipo función
esSuperman = convertirClark();
function convertirClark() {
    return false;
}
/**
 * Declaración de variable tipo numericos
 */
var avengers = 5;
var villanos = 10;
var otros = 2;
if (avengers > villanos) {
    console.log("Estamos salvados");
}
else {
    console.log("Estamos muertos");
}
/**
 * Declaración de variable tipo string
 */
var batman = "Batman";
var linternaVerde = 'Linterna Verde';
var volcanNegro = "Volc\u00E1n Negro";
var concat = "Los hero\u00E9s son: " + batman + ", " + linternaVerde + ", " + volcanNegro;
console.log(concat);
/**
 * Declaración de variable dinámicos tipo ANY
 */
var vengador = "superman";
var derrotas;
vengador = "Dr. Strange";
console.log(vengador.charAt(0));
vengador = 150.5555;
console.log(vengador.toFixed(2));
vengador = true;
console.log(vengador);
/**
 * Declaración de variables tipo matriz
 */
var arreglo = [1, 2, 4, 5, 6, 7];
var villanosArr = ["Omega Rojo", "Dormammu", "Duende Verde"];
console.log(villanosArr[0].charAt(0));
/**
 * Declaración de variables tipo tupla (array)
 *  donde se conoce el n° de elementos
 */
var heroe = ["Dr. Strange", 100, true];
heroe = ["Jhon", 27, true];
/**
 * Declaración de varibles tipo enum
 */
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 5] = "medio";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
var audio = Volumen.medio;
console.log(audio);
/**
 * Declaración de funciones tipo VOID:
 * la ausencia de tener ningún tipo en absoluto
 */
function llamar_batman() {
    console.log("Mostrar la batiseñal");
    // return true;
}
/**
 * Declaración de funciones tipo NEVER
 * para asignar tipos de errores criticos
 */
function error(mensaje) {
    throw new Error(mensaje);
}
//se comenat para evitar el mensaje de error
//   error('Error critico en la linea 90 del la app')
/**
 * Declaracion de variable utilizando TYPE ASSERTIONS
 * Cuando de transforma los tipo de variable ejp: number -> string
 */
var cualquierValor = "Cualquier cosa";
var largoDelString = cualquierValor.length;
console.log(largoDelString);
