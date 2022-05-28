/*Existen diferentes metodos para recorrer un array de objetos {una forma de leer los datos}*/


const arr= [
    { nombre:"Bicicleta",costo:300 },
    { nombre:"Patin",costo:200},
    {nombre:"laptop",costo:150},
    {nombre:"Escritorio",costo:190},
    {nombre:"Teclado",costo:340},
    {nombre:"Audifonos",costo:100}
]

/*=====FILTER()=====*/

/*Filter() como su nombre lo dice, 'Filtra' los datos segun el criterio de su parámetro*/
/*Este método recibe una function la cual aplicara para realizar el filtrado*/
/*NOTA: No se modifíca el array original*/

let articulosFiltrados = arr.filter(function(articulo){
    return(
        articulo.costo <=200
    )
})


console.log(articulosFiltrados)


/*=================*/
/*=====MAP()=======*/

/*MAP() áplica una funcion o instruccion a cada elemento que este iterando*/

/*NOTA: No se modifíca el array original*/

let nombresArticulos = arr.map(function(articulo){
    return (
        articulo.nombre
    )
})

console.log(nombresArticulos)


/*=================*/
/*=====FIND()======*/

/*NOTA: No se modifíca el array original*/

/*FIND() busca en términos de true/false...Sí existe lo voy a regresar, sí no
existe, no lo voy a regresar*/

let encuentraArticulo = arr.find(function(articulo){
    return(
        articulo.nombre === "Teclado"
    )
})

console.log(encuentraArticulo)


/*=================*/
/*=====FOR EACH()======*/

arr.forEach(function(articulo){
    console.log(articulo.costo)
})



/*=================*/
/*=====SOME()======*/

/*Nos regresa un resultado en párametros de true/false*/
let articulosBaratos=arr.some(function(articulo){
    return(
        articulo.costo <= 150
    )
}) 

console.log(articulosBaratos)

/*A diferencia de los demas métodos, some() solo nos regresa true/false
si es que se cumple o no el parametro indicado*/