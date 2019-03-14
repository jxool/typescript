"use strict";
// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil(auto) {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
}
var batimovilI = {
    encender: false,
    velocidadMaxima: 0,
    acelerar: function () {
        console.log("...... run!!!");
    }
};
// utilizando propiedades opcionales
var guason = {
    reir: true,
    comer: true,
    llorar: false
};
function reir(guason) {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
}
var ciudad;
ciudad = function ciudadGotica(ciudadanos) {
    return ciudadanos.length;
};
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
var Mexicano = /** @class */ (function () {
    function Mexicano() {
        this.nombre = "Juan X";
        this.edad = 26;
        this.sexo = "Hombre";
        this.estadoCivil = "Soltero";
    }
    Mexicano.prototype.imprimirBio = function () {
        console.log("Mi nombre " + this.nombre + " tengo " + this.edad + " soy " + this.sexo + " y " + this.estadoCivil);
    };
    return Mexicano;
}());
