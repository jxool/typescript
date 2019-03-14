
class Avenger {

    /**
     * propiedades estaticos, publicos, privados y protegidos
     */

    static poder:string = "Correr rápido"

    private puedePelear: boolean = false;
    private peleasGanadas:number = 0;

    constructor ( public nombre:string, protected equipo:string, private nombreReal:string , private _nombre?:string ){
        
        console.log("Constructor Avenger llamado");
    }
    
    /**
     * Gets & Sets
     */
    get nombreG():string{
        
        if( this._nombre ){
            return this._nombre;
        }else{
            return "No tiene un nombre el avenger";
        }
    }

    set nombreS(nombre:string){
        this._nombre = nombre;
    }

    /**
     * Métodos estaticos, publicos, protegidos y privados
     */
    public bio () : void {
        let mensaje: string = `${this.nombre} ${this.nombreReal} ${this.equipo}`;
        console.log(mensaje)
    }

    public cambiaEquipoPublico(nuevoEquipo:string):boolean{
        return this.cambiarEquipo(nuevoEquipo);
    }

    private cambiarEquipo(nuevoEquipo:string):boolean{

        if( nuevoEquipo === this.equipo){
            return false;
        }else{
            return true;
        }
    }

    protected getNombre():string{
        return this.nombre
    }

    static crerPoder(){
        console.log("Se creo un poder a partir de un método estatico");
        return new Avenger( "Antman", "Capitan", "Scott Lang", "Antman")
    }
 
}

class Xmen extends Avenger {

    constructor ( a:string, b:string, c:string){
        console.log("Constructor Xmen llamado");
        super(a, b, c);
    }

    public getNombre(): string {
        return super.getNombre();
    }
}

// let antman: Avenger = new Avenger( "Antman", "Capitan", "Scott Lang");

// antman.bio();
// antman.cambiaEquipoPublico('Capitan')

// console.log(antman)

let ciclope: Xmen = new Xmen("Ciclope","Capitan", "Scott");

console.log(ciclope);

let avenger:Avenger = new Avenger( "Antman", "Capitan", "Scott Lang", "Antman");

// console.log(avenger.nombreG)

// avenger.nombreS = "Ciclope";

// console.log(avenger.nombreG);

let estatico = Avenger.crerPoder();

console.log( estatico )

/**
 * Constructores privados
 */

 class Apocalipsisx {
    static instancia:Apocalipsisx;

    private constructor (public nombre:string){

    }

    static llamarApocalipsis(){
        if(! Apocalipsisx.instancia){
            Apocalipsisx.instancia = new Apocalipsisx("Soy Apocalipsis !!!! el unico");
        }

        return Apocalipsisx.instancia
    }


 }

 let apo = Apocalipsisx.llamarApocalipsis();
 console.log(apo);


 