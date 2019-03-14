
/**
 * Más información en: http://www.typescriptlang.org/docs/handbook/basic-types.html
 * Declaración de variables tipo boolenos
 */
let esSuperman: boolean = true;
let esBatman: boolean;
let esAcuaman: boolean = true;

if(esSuperman){
    console.log('Estamos salvados');
}else{
    console.log('oppps');
}

//Asiganción de variable tipo función
esSuperman = convertirClark();


function convertirClark (){
    return false;
}

/**
 * Declaración de variable tipo numericos
 */

let avengers: number = 5;
let villanos: number = 10; 
let otros = 2;

if( avengers > villanos ){
    console.log("Estamos salvados");
}else{
    console.log("Estamos muertos");
}

/**
 * Declaración de variable tipo string
 */


let batman: string = "Batman";
let linternaVerde = 'Linterna Verde';
let volcanNegro:string = `Volcán Negro`;

let concat = `Los heroés son: ${ batman }, ${ linternaVerde }, ${ volcanNegro }`;

console.log( concat);


/**
 * Declaración de variable dinámicos tipo ANY
 */

let vengador:any = "superman";

let derrotas;

vengador = "Dr. Strange";
console.log(vengador.charAt(0));

vengador = 150.5555;
console.log( vengador.toFixed(2));

vengador = true;
console.log( vengador )
 
/**
 * Declaración de variables tipo matriz
 */

let arreglo:number[] = [1,2,4,5,6,7];

let villanosArr: string[] = ["Omega Rojo", "Dormammu", "Duende Verde"];

console.log( villanosArr[0].charAt(0));

/**
 * Declaración de variables tipo tupla (array)
 *  donde se conoce el n° de elementos
 */

let heroe: [ string, number, boolean] = ["Dr. Strange", 100, true ];

heroe = ["Jhon", 27, true];

/**
 * Declaración de varibles tipo enum
 */

 enum Volumen {
     min = 1,
     medio = 5,
     max = 10
 }

 let audio:number = Volumen.medio;

 console.log( audio)

/**
 * Declaración de funciones tipo VOID: 
 * la ausencia de tener ningún tipo en absoluto
 */


 function llamar_batman(): void {
    console.log("Mostrar la batiseñal");

    // return true;
 }

 /**
  * Declaración de funciones tipo NEVER
  * para asignar tipos de errores criticos
  */

  function error(mensaje:string) : never{
    throw new Error(mensaje)
  }

//se comenat para evitar el mensaje de error
//   error('Error critico en la linea 90 del la app')

/**
 * Declaracion de variable utilizando TYPE ASSERTIONS
 * Cuando de transforma los tipo de variable ejp: number -> string
 */

 let cualquierValor: any = "Cualquier cosa";
 let largoDelString:number = (<string>cualquierValor).length;
 console.log(largoDelString);