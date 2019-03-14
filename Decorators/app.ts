
function consola ( constructor:Function ){
    console.log( constructor );
}

function nulx (){

}

function imprimirConsola( imprimir:boolean ):Function {

    if( imprimir ){
        return consola;
    }else{
        return nulx;
    }
}

@imprimirConsola(true)
class VillanoD {
    constructor( public nombre:string ){

    }
}

/**
 * decorador avanzado
 */

 function planVillano ( constructor:Function ){

    constructor.prototype.imprimirPlan = function(){
        console.log( " El plan de " + this.nombre + " es dominar el mundo!")
    }
 }

 function imprimible ( constructor:Function ){

    constructor.prototype.imprimir = function(){
        console.log( this )
    }
 }

 //decorador de metodo
 function editable ( esEditable:boolean){

    return function ( target:any, nombrePropiedad:string, descriptor:PropertyDescriptor){
        descriptor.writable = esEditable;
    }
 }

 @imprimible
 @planVillano
 class VillanoDZ {
    
    constructor ( public nombre:string, public poder:string ){

    }

    @editable(false)
    plan() {
        console.log("Tengo nuevo plan !!!!!!!")
    }

 }

 let lex = new VillanoDZ("Lex Luthor", "Super mente");
 (<any>lex).imprimirPlan();
 (<any>lex).imprimir();

 lex.plan = function(){
     console.log("Ya no tengo planes")
 }

 lex.plan();