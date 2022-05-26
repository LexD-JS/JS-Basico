/*Los arreglos son una agrupación de datos, pueden ser del mismo tipo o distinto.... incluso se pueden convinar.
A los arreglos, se les pueden pasar distintos tipos de metodos para que obtener distintos resultados.*/


const frutas = ["manzanas", "platano", "mango", "granada"];

const masFrutas = frutas.push("fresas", "papaya", "sandia")

console.log(frutas)
console.log(frutas.pop())
console.log(frutas.shift())
console.log(frutas.unshift())
console.log(frutas.concat("naranja"))