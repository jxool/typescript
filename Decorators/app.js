"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function consola(constructor) {
    console.log(constructor);
}
function nulx() {
}
function imprimirConsola(imprimir) {
    if (imprimir) {
        return consola;
    }
    else {
        return nulx;
    }
}
var VillanoD = /** @class */ (function () {
    function VillanoD(nombre) {
        this.nombre = nombre;
    }
    VillanoD = __decorate([
        imprimirConsola(true)
    ], VillanoD);
    return VillanoD;
}());
/**
 * decorador avanzado
 */
function planVillano(constructor) {
    constructor.prototype.imprimirPlan = function () {
        console.log(" El plan de " + this.nombre + " es dominar el mundo!");
    };
}
function imprimible(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}
//decorador de metodo
function editable(esEditable) {
    return function (target, nombrePropiedad, descriptor) {
        descriptor.writable = esEditable;
    };
}
var VillanoDZ = /** @class */ (function () {
    function VillanoDZ(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
    VillanoDZ.prototype.plan = function () {
        console.log("Tengo nuevo plan !!!!!!!");
    };
    __decorate([
        editable(false)
    ], VillanoDZ.prototype, "plan", null);
    VillanoDZ = __decorate([
        imprimible,
        planVillano
    ], VillanoDZ);
    return VillanoDZ;
}());
var lex = new VillanoDZ("Lex Luthor", "Super mente");
lex.imprimirPlan();
lex.imprimir();
lex.plan = function () {
    console.log("Ya no tengo planes");
};
lex.plan();
