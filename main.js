import Tiempo from "./tiempo.js";
import Fecha from "./fecha.js";
import ElementoPedido from "./elemento-pedido.js";
import Cliente from "./cliente.js";
import Direccion from "./direccion.js";
import Precio from "./precio.js";
import Producto from "./producto.js";
import Pedido from "./pedido.js";
import Restaurante from "./restaurante.js";
class Main{
    constructor(){
        this.restaurante=new Restaurante("Pepito pizzas",3121683637,new Direccion("Verdadera",123,0,"Colonia chida",28984,"Colima","Colima"));
    }
    registrarPedidos(){        
        this.restaurante.registrarPedidos(pedido1);
        this.restaurante.registrarPedidos(pedido2);
        this.restaurante.registrarPedidos(pedido3);
        this.restaurante.listarPedidos();
    }
    registrarProductos(){
        
        this.restaurante.registrarProductos(producto1);
        this.restaurante.registrarProductos(producto2);
        this.restaurante.registrarProductos(producto3);
        this.restaurante.listrarProductos();
    }
}
var producto1= new Producto("pizza de poio",new Precio(50));
var producto2= new Producto("Pizza de camaron",new Precio(100));
var producto3=new Producto("Pizza con piña",new Precio(10));
var elemento1= new ElementoPedido(producto1,2);
var elemento2= new ElementoPedido(producto2,4);
var elemento3= new ElementoPedido(producto3,5);
var pedido1 = new Pedido(new Fecha(19,2,2020),new Tiempo(22,10),new Cliente("Elmo",new Direccion("Falsa",123,0,"Malavista",28984,"Colima","Colima"),3123027485));
var pedido2 = new Pedido(new Fecha(19,2,2020),new Tiempo(22,10),new Cliente("Elmer",new Direccion("Falsa",124,0,"Malavista",28984,"Colima","Colima"),3123127485));
var pedido3 = new Pedido(new Fecha(19,2,2020),new Tiempo(22,10),new Cliente("Elza",new Direccion("Falsa",125,0,"Malavista",28984,"Colima","Colima"),3123227485));
pedido1.agregarElemento(elemento1);
pedido1.agregarElemento(elemento2)
pedido2.agregarElemento(elemento2);
pedido3.agregarElemento(elemento3);
pedido1.getCostoTotal(elemento1);
var app = new Main();
app.registrarPedidos();
console.log("-------------------");
app.registrarProductos();
