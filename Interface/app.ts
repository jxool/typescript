interface XmenI {
    nombre: string,
    regenerar( nombreReal: string): void;
}


function enviarMision ( xmen:XmenI){
    console.log("Enviando a:" + xmen.nombre);

    xmen.regenerar("Logan");
}

let wolverine = {
    nombre: "Wolverine",
    regenerar(x:string){
        console.log("Se ha regenerado " + x);
    }
};

enviarMision(wolverine);

class MutanteI implements XmenI {
    nombre:string = "";

    regenerar( nombre:string ){
        console.log("Hola " + nombre )
    }
}

let wolverinei = new MutanteI ();


console.log(wolverinei.regenerar("Logan"))


/**
 * Interface para las funciones
 */

interface DosNumerosFunc{
    ( num1:number, num2:number ) : number
}

let sumarI:DosNumerosFunc;

sumarI = function(a:number, b:number){
    return a + b;
}

let restarI:DosNumerosFunc;

restarI = function (numero1: number, numero2:number){
    return numero1 - numero2;
}

