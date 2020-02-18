import Direccion from "./direccion.js";
export default class Cliente{
    /**
     * 
     * @param {string} Nombre El nombre del cliente
     * @param {Direccion} direccion Direccion del cliente
     * @param {number} telefono Numero de telefono del paciente
     */
    constructor(nombre,direccion,telefono){
        this.nombre= nombre;
        this.direccion= direccion;
        this.telefono=telefono;
    }
    getPerfil(){
        var telefonoString= this.telefono.toString();
        return (`${this.nombre}, ${this.direccion.getFormatoCorto()}, ${telefonoString.slice(0,3)}-${telefonoString.slice(3,6)}-${telefonoString.slice(6,10)}`);
    }
}

