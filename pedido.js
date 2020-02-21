import Tiempo from "./tiempo.js";
import Fecha from "./fecha.js";
import ElementoPedido from "./elemento-pedido.js";
import cliente from "./cliente.js";
import Cliente from "./cliente.js";
import Direccion from "./direccion.js";
import Precio from "./precio.js";
import Producto from "./producto.js";
export default class Pedido {
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
        return `${this.fecha.getFecha()}  ${this.hora.getFormato12()} Un total de ${this.getNumeroElementos()} Elementos con  ${this.getNumeroProductos()} productos total: ${this.getCostoTotal()}`;
    }
    getNumeroElementos(){
        return (this.elementosPedidos.length);
    }
    getNumeroProductos(){
        var nProductos = 0;
        this.elementosPedidos.forEach(elemento => {
            nProductos+=elemento.cantidad;
        });
        return nProductos;
    }
    getCostoTotal(){
        var total = 0;
        this.elementosPedidos.forEach(elemento => {
            total += elemento.cantidad * elemento.producto.precio.valor;
        });
        return new Precio(total).getPrecio();

    }
    agregarElemento(elemento){
        this.elementosPedidos.push(elemento)
    }
    listarElementos(){
        this.elementosPedidos.forEach(elemento=>{
            console.log(elemento.getDescripcion())
        });
    }
}