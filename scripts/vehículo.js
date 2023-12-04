import { mostrarResultado } from "./main.js";

export class Vehiculo{
    #marca;
    #modelo;
    #color;
    #anioFabricacion
    #cilindrada;

    constructor(marca, modelo, color, anioFabricacion, cilindrada){
    this.#marca = marca;
    this.#modelo = modelo;
    this.#color = color;
    this.#anioFabricacion = anioFabricacion;
    this.#cilindrada = cilindrada;
    }

    mostrarDatos(){
        const messaje = `<p>La marca es: ${this.#marca}</p>
                            <p>La marca es: ${this.#modelo}</p>
                            <p>El modelo: ${this.#color}</p>
                            <p>El año de la fabricación es: ${this.#anioFabricacion}</p>
                            <p>Tiene una cilindrada de: ${this.#cilindrada}</p>`

        mostrarResultado(messaje)
    }

    acelerar(dato){
        const messaje = `<p>Has acelerado hasta los ${dato} km/h</p>`
        mostrarResultado(messaje)
    }

    arrancar(){
        const messaje = `<p> El vehículo ha arrancado</p>`
        mostrarResultado(messaje)
    }

    frenar(){
        const messaje = `<p> El vehículo ha frenado</p>`
        mostrarResultado(messaje)
    }


    get marca(){
        return this.#marca;
    }
    set marca(marca){
        this.#marca = marca;
    }

    get modelo(){
        return this.#modelo;
    }
    set modelo(modelo){
        this.#modelo = modelo;
    }
    
    get color(){
        return this.#color;
    }
    set color(color){
        this.#color = color;
    }

    get anioFabricacion(){
        return this.#anioFabricacion;
    }
    set anioFabricacion(anioFabricacion){
        this.#anioFabricacion = anioFabricacion;
    }

    get cilindrada(){
        return this.#cilindrada;
    }
    set cilindrada(cilindrada){
        this.#cilindrada = cilindrada;
    }
}