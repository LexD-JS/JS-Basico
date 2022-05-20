/*Operadores aritmeticos*/

console.log(5+9,5-1,9*8,9/3,10%2)

//Son los operadores que se suelen utilizar en operaciones matemáticas.

/*=======================================*/


/*Operadores de Asignación*/

var a = 10
let b = 3
const c = "Tomazito"

//NOTA: Aquí el operador de asignación sería el =, ya que nos ayuda a asignarle un valor a la varibale que estamos declarando.

/*=======================================*/


/*Operadores de Comparacion*/

console.log(3=="3") //True
console.log(3=="Hola") //False
console.log("5"=="3")//False
console.log("5"==5)//True

// NOTA:Pero, ¿por qué pasa esto?. Esto se debe a que el uso de '==' es una comparación simple.
//¿Qué quiere decir? Que mientras sea el mismo caracter, sin importar el tipo de dato que sea (number,String), sí es igual
//JS lo tomará como iguales. así que debemos tener cuidado con ese detalle.


console.log(3==="3") //False
console.log(3==="Hola") //False
console.log("5"==="3")//False
console.log("5"===5)//False
console.log(10===10)//True
console.log("hola"==="mundo")//False
console.log("hola"==="hola")//True


/*¿Qué pasa aquí?, Que cuando usamos '===' se vuelve una comparacion ESTRICTA.
osea que los valores y tipos deben ser si o si los mismos, no vasta que sean del mismo tipo, deben tener el mismo valor*/