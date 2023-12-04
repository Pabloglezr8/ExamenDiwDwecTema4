 import { Vehiculo } from "./vehículo.js";
 import { Deportivo } from "./deportivo.js";
 
const resultadoContainer = document.createElement('div')
resultadoContainer.className = "container";
document.body.appendChild(resultadoContainer);

 export function mostrarResultado(dato){
    resultadoContainer.innerHTML += `<p>${dato}</p>`;
 }

 const vehículo1 = new Vehiculo('BMW', 'CLK', 'Rojo', 1992, 2400)
 mostrarResultado(`<br><p class="title">-----Vehículo1-----</p>`)
 vehículo1.mostrarDatos();
 vehículo1.arrancar()
 vehículo1.acelerar(140);
 vehículo1.frenar();
 
 const deportivo1 = new Deportivo('Ferrari', 'Spider', 'Amarillo', 2020, 4000, 500)
 mostrarResultado(`<br><p class="title">----Deportivo1----</p>`)
 deportivo1.mostrarDatos();
 deportivo1.arrancar()
 deportivo1.acelerar(140);
 deportivo1.frenar();
 deportivo1.activarModDeportivo()

 const vehiculoObjeto = {
    marca: 'BMW',
    modelo: 'CLK',
    color: 'Rojo',
    anioFabricacion: 1992,
    cilindrada: 2400,
 }

 const deportivoObjeto = {
    marca: 'Ferrari',
    modelo: 'Spider',
    color: 'Amarillo',
    anioFabricacion: 2020,
    cilindrada: 4000,
    potencia: 500,
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

localStorage.clear()
