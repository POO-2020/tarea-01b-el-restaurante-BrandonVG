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
        var total=0;
        this.elementosPedidos.forEach(elementos=>{
            var variableInutil = elementos.getDescripcion()
            var resto = variableInutil.split("$");
            var precioTemp = resto.pop();
            var productoSinP= resto.join("$");
            var precioReal= precioTemp * this.cantidad;
            total=total+precioReal;
            console.log(total);
        })
    }
    agregarElemento(elemento){
        this.elementosPedidos.push(elemento)
    }
    listarElementos(){
        this.elementosPedidos.forEach((elementos,index)=>{
            console.log(`${elementos.getDescripcion()}`);
        });
    }
}