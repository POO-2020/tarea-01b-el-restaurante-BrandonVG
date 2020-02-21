import Tiempo from "./tiempo.js";
import Fecha from "./fecha.js";
import ElementoPedido from "./elemento-pedido.js";
import cliente from "./cliente.js";
import Cliente from "./cliente.js";
import Direccion from "./direccion.js";
import Precio from "./precio.js";
import Producto from "./producto.js";
import Pedido from "./pedido.js";
export default class Restaurante {
    /**
     * 
     * @param {string} nombre Nombre del restaurante
     * @param {number} telefono Numero del restaurante
     * @param {Direccion} direccion Objeto direccion del restaurante
     * @param {Array} productos Array de productos
     * @param {Array} pedidos Array de pedidos
     */
constructor(nombre,telefono,direccion){
    this.nombre=nombre;
    this.telefono=telefono;
    this.direccion=direccion;
    this.productos=[];
    this.pedidos=[];
}
registrarProductos(producto){
    this.productos.push(producto);
}
listrarProductos(){
    this.productos.forEach(producto=>{
        console.log(producto.getDescripcion());
    });
}
registrarPedidos(pedido){
    this.pedidos.push(pedido);
}
listarPedidos(){
    this.pedidos.forEach((pedido) =>{
        console.log(pedido.getResumen());
    });
}
}