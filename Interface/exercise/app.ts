// Crear interfaces
interface AutoI {
  encender:boolean,
  velocidadMaxima: number,
  acelerar():void
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil( auto:AutoI ):void{
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

let batimovilI:AutoI = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... run!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto

interface Guason {
  reir ? : boolean,
  comer ? : boolean,
  llorar ? : boolean
}
// utilizando propiedades opcionales

let guason: Guason = {
  reir: true,
  comer:true,
  llorar:false
}

function reir( guason:Guason ):void{
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface Ciudad {
  ( ciudadanos: string[]): number
}

let ciudad:Ciudad;

ciudad = function ciudadGotica( ciudadanos:string[] ):number{
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface Persona {
  nombre: string,
  edad: number,
  sexo: string,
  estadoCivil: string,
  imprimirBio():void
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

class Mexicano implements Persona{

  nombre:string = "Juan X";
  edad: number = 26;
  sexo: string = "Hombre";
  estadoCivil:string = "Soltero"

  imprimirBio():void{
      console.log(`Mi nombre ${this.nombre} tengo ${this.edad} soy ${ this.sexo} y ${this.estadoCivil}`);
  }

}
