export default class Direccion{
    /**
     * 
     * @param {string} calle 
     * @param {number} numeroExterior 
     * @param {number} numeroInterior 
     * @param {string} colonia 
     * @param {number} codigoPostal 
     * @param {string} ciudad 
     * @param {string} municipio 
     */
    constructor(calle,numeroExterior,numeroInterior,colonia,codigoPostal,ciudad,municipio){
        this.calle= calle;
        this.numeroExterior=numeroExterior;
        this.numeroInterior= numeroInterior;
        this.colonia= colonia;
        this.codigoPostal=codigoPostal;
        this.ciudad=ciudad;
        this.municipio=municipio;
    }
    getFormatoCorto(){
        return (`Calle ${this.calle} #${this.numeroExterior}`);
    }
    getFormatoExtendido(){
        if (this.numeroInterior==0){
            return(`Calle ${this.calle} #${this.numeroExterior} Colonia: ${this.colonia} CP: ${this.codigoPostal} Ciudad:${this.ciudad} municipio: ${this.municipio}`);
        }
        else{
            return(`Calle ${this.calle} #${this.numeroExterior} interior: ${this.numeroInterior} Colonia: ${this.colonia} CP: ${this.codigoPostal} Ciudad:${this.ciudad} municipio: ${this.municipio}`);
        }
    }
}
/*
var direccion1= new Direccion("Gran Higuera",441,6,"Buena vista",28984,"Villa de Alvarez","Villa de Alvarez");
console.log(direccion1.getFormatoCorto());
*/