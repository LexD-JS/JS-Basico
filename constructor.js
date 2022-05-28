function auto(marca,modelo,annio){
this.marca=marca;
this.modelo=modelo;
this.annio=annio;
}

let teslaY=new auto("tesla","Model Y", 2021);

let teslaX = new auto("tesla","Model X",2022);

console.log(teslaY);
console.log(teslaX);

// ========Reto de construir un ciclo para "Automatizar" el constructor========

const carros=["Nissan","Toyota","Tesla","mazda"]

function taller(marca){
    this.marca=marca;
}

for(let carro of carros){
    taller(carro);
    console.log(carro)
}

