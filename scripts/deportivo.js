import { mostrarResultado } from "./main.js";
import { Vehiculo } from "./vehículo.js";

export class Deportivo extends Vehiculo {
    #potencia

    constructor(marca, modelo, color, anioFabricacion, cilindrada, potencia) {
        super(marca, modelo, color, anioFabricacion, cilindrada)
        this.#potencia = potencia
    }

    activarModDeportivo() {
        const messaje = `<p>Se ha activado el modo deportivo</p>`
        mostrarResultado(messaje);
    }

    get potencia(){
        return this.#potencia;
    }
    set potencia(potencia){
        this.#potencia = potencia;
    }


    mostrarDatos() {
        super.mostrarDatos()

        const messaje = `<p>Tiene una potencia de: ${this.#potencia}</p>`
        mostrarResultado(messaje);
    }
}
