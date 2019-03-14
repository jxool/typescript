"use strict";
function enviarMision(xmen) {
    console.log("Enviando a:" + xmen.nombre);
    xmen.regenerar("Logan");
}
var wolverine = {
    nombre: "Wolverine",
    regenerar: function (x) {
        console.log("Se ha regenerado " + x);
    }
};
enviarMision(wolverine);
var MutanteI = /** @class */ (function () {
    function MutanteI() {
        this.nombre = "";
    }
    MutanteI.prototype.regenerar = function (nombre) {
        console.log("Hola " + nombre);
    };
    return MutanteI;
}());
var wolverinei = new MutanteI();
console.log(wolverinei.regenerar("Logan"));
var sumarI;
sumarI = function (a, b) {
    return a + b;
};
var restarI;
restarI = function (numero1, numero2) {
    return numero1 - numero2;
};
