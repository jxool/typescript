"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal, _nombre) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        this._nombre = _nombre;
        this.puedePelear = false;
        this.peleasGanadas = 0;
        console.log("Constructor Avenger llamado");
    }
    Object.defineProperty(Avenger.prototype, "nombreG", {
        /**
         * Gets & Sets
         */
        get: function () {
            if (this._nombre) {
                return this._nombre;
            }
            else {
                return "No tiene un nombre el avenger";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Avenger.prototype, "nombreS", {
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Métodos estaticos, publicos, protegidos y privados
     */
    Avenger.prototype.bio = function () {
        var mensaje = this.nombre + " " + this.nombreReal + " " + this.equipo;
        console.log(mensaje);
    };
    Avenger.prototype.cambiaEquipoPublico = function (nuevoEquipo) {
        return this.cambiarEquipo(nuevoEquipo);
    };
    Avenger.prototype.cambiarEquipo = function (nuevoEquipo) {
        if (nuevoEquipo === this.equipo) {
            return false;
        }
        else {
            return true;
        }
    };
    Avenger.prototype.getNombre = function () {
        return this.nombre;
    };
    Avenger.crerPoder = function () {
        console.log("Se creo un poder a partir de un método estatico");
        return new Avenger("Antman", "Capitan", "Scott Lang", "Antman");
    };
    /**
     * propiedades estaticos, publicos, privados y protegidos
     */
    Avenger.poder = "Correr rápido";
    return Avenger;
}());
var Xmen = /** @class */ (function (_super) {
    __extends(Xmen, _super);
    function Xmen(a, b, c) {
        var _this = this;
        console.log("Constructor Xmen llamado");
        _this = _super.call(this, a, b, c) || this;
        return _this;
    }
    Xmen.prototype.getNombre = function () {
        return _super.prototype.getNombre.call(this);
    };
    return Xmen;
}(Avenger));
// let antman: Avenger = new Avenger( "Antman", "Capitan", "Scott Lang");
// antman.bio();
// antman.cambiaEquipoPublico('Capitan')
// console.log(antman)
var ciclope = new Xmen("Ciclope", "Capitan", "Scott");
console.log(ciclope);
var avenger = new Avenger("Antman", "Capitan", "Scott Lang", "Antman");
// console.log(avenger.nombreG)
// avenger.nombreS = "Ciclope";
// console.log(avenger.nombreG);
var estatico = Avenger.crerPoder();
console.log(estatico);
/**
 * Constructores privados
 */
var Apocalipsisx = /** @class */ (function () {
    function Apocalipsisx(nombre) {
        this.nombre = nombre;
    }
    Apocalipsisx.llamarApocalipsis = function () {
        if (!Apocalipsisx.instancia) {
            Apocalipsisx.instancia = new Apocalipsisx("Soy Apocalipsis !!!! el unico");
        }
        return Apocalipsisx.instancia;
    };
    return Apocalipsisx;
}());
var apo = Apocalipsisx.llamarApocalipsis();
console.log(apo);
