import Producto from "./producto.js";
import Precio from "./precio.js";
export default class ElementoPedido{
    /**
     * 
     * @param {Producto} producto Objeto producto
     * @param {number} cantidad Cantidad de productos
     */
    constructor(producto,cantidad){
        this.producto=producto;
        this.cantidad=cantidad;
    }
    getDescripcion(){
        var costo=this.producto.precio.valor;
        var total = costo*this.cantidad;
        var descripcion =`${this.cantidad} x ${this.producto.nombre} $${total}`;
        return descripcion;
    }
}
