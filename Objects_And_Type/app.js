"use strict";
/**
 * Objetos básicos y tipos especificos
 * Métodos dentro de los objetos
 * Tipo de objetos personalizados (TYPE)
 */
var flash = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Puede correr muy rápido", "Viajar por el tiempo"],
    getNombre: function () {
        return this.nombre;
    }
};
/**
 * Multiples tipos permitidos
 */
var loquesea = "Juan X.";
loquesea = {
    nombre: "Flash",
    edad: 56
};
/**
 * Revisar tipo de variable u objeto
 */
var cosa = 123;
console.log(typeof cosa);
if (typeof cosa === "number") {
    console.log("Cosa, es un número");
}
