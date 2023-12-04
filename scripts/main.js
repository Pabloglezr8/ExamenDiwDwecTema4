 //Autor: Pablo Gonzalez Ruiz
 //https://github.com/Pabloglezr8/ExamenDiwDwecTema4.git
 
 import { Vehiculo } from "./vehículo.js";
 import { Deportivo } from "./deportivo.js";
 
const resultadoContainer = document.createElement('div')
resultadoContainer.className = "container";
document.body.appendChild(resultadoContainer);

 export function mostrarResultado(dato){
    resultadoContainer.innerHTML += `<p>${dato}</p>`;
 }

 const vehiculo1 = new Vehiculo('BMW', 'CLK', 'Rojo', 1992, 2400)
 mostrarResultado(`<br><p class="title">-----Vehículo1-----</p>`)
 vehiculo1.mostrarDatos();
 vehiculo1.arrancar()
 vehiculo1.acelerar(140);
 vehiculo1.frenar();
 
 const deportivo1 = new Deportivo('Ferrari', 'Spider', 'Amarillo', 2020, 4000, 500)
 mostrarResultado(`<br><p class="title">----Deportivo1----</p>`)
 deportivo1.mostrarDatos();
 deportivo1.arrancar()
 deportivo1.acelerar(140);
 deportivo1.frenar();
 deportivo1.activarModDeportivo()

 const vehiculoObjeto = {
    marca: vehiculo1.marca,
    modelo: vehiculo1.modelo,
    color: vehiculo1.color,
    anioFabricacion: vehiculo1.anioFabricacion,
    cilindrada: vehiculo1.cilindrada,
 }

 const deportivoObjeto = {
    marca: deportivo1.marca,
    modelo: deportivo1.modelo,
    color: deportivo1.color,
    anioFabricacion: deportivo1.anioFabricacion,
    cilindrada: deportivo1.cilindrada,
    potencia: deportivo1.potencia,
 }
 localStorage.setItem("vehiculo",JSON.stringify(vehiculoObjeto))
console.log(JSON.parse(localStorage.getItem("vehiculo")))

 for(let key in deportivoObjeto){
    if(deportivoObjeto.hasOwnProperty(key)){
        localStorage.setItem(key, deportivoObjeto[key])
    }
 }


localStorage.removeItem('anioFabricacion')
localStorage.removeItem('cilindrada')

/* localStorage.clear()
 */