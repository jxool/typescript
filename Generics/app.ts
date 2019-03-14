

function regresar<T> ( arg:T ){
    return arg;
}

console.log( regresar(15.456789).toFixed(2) );
console.log( regresar("Ricardo Tapia").charAt(0) );

/**
 * Función generica en acción
 */
function functionGenerica<T>(arg:T){
    return arg;
}

 type HeroeG = {
    nombre:string;
    nombreReal:string
 }

 type VillanoG = {
     nombre: string;
     poder: string
 }

 let deadpool = {
     nombre: "Deadpool",
     nombreReal: "Wde Winston Wilson",
     poder: "Regeneración"
 }

 console.log( functionGenerica<VillanoG>( deadpool ).nombre);

 
/**
 * Arreglos genéricos
 */

let heroesG: Array<string> = ["Flash", "Batman", "Superman"];

heroesG.push( "123" );

let villanosG:String[] = ["Lex Luthor", "Flash Reverso"];

/**
 * Clases genéricas
 */

class Cuadrado<T extends number|string > {
    base:T = 10;
    altura:T;
    area():number {
        return +this.base * +this.altura;
    }
}

let cuadrado = new Cuadrado<number|string>();

cuadrado.base = "10";
cuadrado.altura = 10;

console.log( cuadrado.area() )