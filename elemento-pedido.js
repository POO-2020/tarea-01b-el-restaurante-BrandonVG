import Producto from "./producto.js";
import Precio from "./precio.js";
class ElementoPedido{
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
        return(`${this.cantidad} x ${this.producto.getDescripcion()}`);
    }
}
var elemento1= new ElementoPedido(new Producto("jabon Ariel",(new Precio(50))),2);

console.log(elemento1.getDescripcion());