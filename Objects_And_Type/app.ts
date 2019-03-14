/**
 * Objetos básicos y tipos especificos
 * Métodos dentro de los objetos
 * Tipo de objetos personalizados (TYPE)
 */

 type Heroe = {
     nombre: string,
     edad: number,
     poderes: string[],
     getNombre: () => string
 }

 type HeroesX = {
     nombre: string,
     edad: number
 }

 let flash: Heroe = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Puede correr muy rápido", "Viajar por el tiempo"],
    getNombre(){
        return this.nombre
    }
 }

 /**
  * Multiples tipos permitidos
  */

  let loquesea : string | number | HeroesX = "Juan X.";

  loquesea = {
      nombre: "Flash",
      edad: 56
  }

  /**
   * Revisar tipo de variable u objeto
   */

   let cosa:any = 123;

   console.log(typeof cosa);

   if( typeof cosa === "number"){
       console.log("Cosa, es un número")
   }