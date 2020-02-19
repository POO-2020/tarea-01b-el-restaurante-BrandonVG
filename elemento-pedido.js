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
        var variableInutil = this.producto.getDescripcion()
        var resto = variableInutil.split("$");
        var precioTemp = resto.pop();
        var productoSinP= resto.join("$");
        var precioReal= precioTemp * this.cantidad;
        return(`${this.cantidad} x ${productoSinP}$${precioReal}`);
    }
}