/**
 * Declarando funciones 
 */
let heroex:string = "Flash";

function imprime_heroe():string{
    return heroex;
}

let activar_batisenal = function():string{
    return "Batiseñal activada";
}

// console.log( imprime_heroe() );
// console.log( activar_batisenal() );

/**
 * Parametros obligatorios
 */

 function nombreCompleto ( nombre:string, apellido:string ):string {
     return nombre + ' '+ apellido;
 }

 let nombre = nombreCompleto( "clark", "kent");

 console.log(nombre);


 /**
  * parametro opcionales
  */

function nombreCompletoDos ( nombre:string, apellido?:string):string{

    if(apellido){
        return nombre + ' ' + apellido;
    }else{
        return nombre;
    }

}

let nombreDos = nombreCompletoDos("Barry", "Allen");

console.log(nombreDos);


/**
 * parametros por defecto
 */

 function nombrePorDefecto(nombre:string, apellido:string, capitalizado:boolean= true):string{
    if(capitalizado){
        return capitalizar(nombre) + " " + capitalizar(apellido);
    }

    return nombre + " " + apellido;
 }

 function capitalizar( palabra:string ): string {
     return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
 }

 let nombrex = nombrePorDefecto("tony", "stark", true);

 console.log(nombrex);

 /**
  * parametros REST
  */

function nombreRest ( nombre:string, ...losDemasParametros:string [] ):string{
    return nombre + " " + losDemasParametros.join(" ");
}

let supermanx:string = nombreRest( "Clarck", "Joseph", "Kent");

console.log(supermanx);

/**
 * Tipo función
 */

 let miFuncion;

 miFuncion = 10;

 