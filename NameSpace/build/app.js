var Validaciones;
(function (Validaciones) {
    function validarTexto(texto) {
        if (texto.length > 3) {
            return true;
        }
        return false;
    }
    Validaciones.validarTexto = validarTexto;
})(Validaciones || (Validaciones = {}));
var Validaciones;
(function (Validaciones) {
    function validarFecha(fecha) {
        if (isNaN(fecha.valueOf())) {
            return false;
        }
        return true;
    }
    Validaciones.validarFecha = validarFecha;
})(Validaciones || (Validaciones = {}));
/// <reference path="validaciones/textos.ts" />
/// <reference path="validaciones/fecha.ts" />
if (Validaciones.validarTexto("Barry Allen")) {
    console.log("El exto es valido");
}
else {
    console.log("El texto no es valido");
}
