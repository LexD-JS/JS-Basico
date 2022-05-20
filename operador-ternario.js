/*El operador ternario sirve exactamete igual que un if, se puede anidar y comparar una condicion*/

/*Su uso es sumamente facil.*/

/*condicion ? <caso verdadero> : <caso falso> */

//Un ejemplo y diferencia con un if normal sería el siguiente.


const lluvia = true;

/*if*/
if(lluvia == true){
    console.log("abre el paraguas que nos mojamos :O")
}else{
    console.log("Un día soleado");
}



/*Operador Ternario*/

lluvia == true ? console.log("Esta lloviendo") : console.log("esta soleado");