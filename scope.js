

const myName="Alejandro"
const lastName="Diaz"

function greeting(name,lastName) {
    return (
        console.log(`Welcome ${name} ${lastName}, good morning.`)
    )
}

greeting(myName,lastName)

//Todas las funciones pueden tener acceso a lo que está fuera de la misma funcion, pero las variables externas
//NO pueden ver lo que esta en local.

//Es como tener una membresia... sí la tiene, puedes hacer uso de todo, si no, solo usar lo global.