import Tiempo from "./tiempo.js";
import Fecha from "./fecha.js";
import ElementoPedido from "./elemento-pedido.js";
import cliente from "./cliente.js";
import Cliente from "./cliente.js";
import Direccion from "./direccion.js";
import Precio from "./precio.js";
import Producto from "./producto.js";
export default class Pedido{
    /**
     * 
     * @param {Fecha} fecha Fecha del pedido
     * @param {Tiempo} hora Hora del pedido
     * @param {cliente} cliente 
     * @param {elementosPedidos} elementosPedidos Numero de elementos pedidos
     */
    constructor(fecha,hora,cliente){
        this.fecha=fecha;
        this.hora=hora;
        this.cliente=cliente;
        this.elementosPedidos=[];
    }
    getResumen(){
        return (`${this.fecha.getFecha()} ${this.hora.getFormato12()} - `);
    }
    getNumeroElementos(){
        return (this.elementosPedidos.length);
    }
    getNumeroProductos(elemento){
        var sumaPro=0;
        this.elementosPedidos.forEach((elementos,index)=>{
            var variableInutil = this.elementos.getDescripcion()
            var otraVarIn = variableInutil.charAt(0)
            sumaPro= sumaPro+otraVarIn;
        });
    }
    getCostoTotal(){
        
    }
    agregarElemento(elemento){
        this.elementosPedidos.push(elemento)
    }
    listarElementos(){
        this.elementosPedidos.forEach((elementos,index)=>{
            console.log(`${index},${elementos.getDescripcion()}`);
        });
    }
}
var asdaw = new Pedido(new Fecha(14,7,2020),new Tiempo(15,20),new Cliente("Elmo",new Direccion("siasd",2,2,"asd",2,"as","asdwa"),3121683637),new ElementoPedido(new Producto("pizza",new Precio(50)),3));
console.log(asdaw.listarElementos());