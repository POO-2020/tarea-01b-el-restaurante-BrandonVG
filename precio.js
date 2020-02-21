export default class Precio{
    /**
     * 
     * @param {number} valor Valor
     */
    constructor(valor){
        this.valor= valor;
    }
    getPrecio(){
        var numeros= this.valor;
        var formato= new Intl.NumberFormat("en-US").format(numeros);
        return(`$${formato}`);
    }
}
/*
var precio1= new Precio(1127);
console.log(precio1.getPrecio());
*/
