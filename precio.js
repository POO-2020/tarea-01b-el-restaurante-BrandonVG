class Precio{
    /**
     * 
     * @param {number} valor Valor
     */
    constructor(valor){
        this.valor= valor;
    }
    getPrecio(){
        return(`$${this.valor}`);
    }
}
var precio1= new Precio(1127);
console.log(precio1.getPrecio());