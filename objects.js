const miCarro={
    marca:"Toyota",
    modelo:"Corola",
    annio:2022,
    detallesDelAuto: function(){
        console.log(`El auto es: ${this.marca} ${this.modelo} ${this.annio}`)
    }
}

console.log(miCarro.detallesDelAuto())