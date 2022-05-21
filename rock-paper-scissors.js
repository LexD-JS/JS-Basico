/*Este es un pequeño juego para entender un poco mejor el funcionamiento del if*/
/*Con el juego clásico de piedra, papel o tijeras*/


let rock = "rock"
let paper = "paper"
let scissors = "scissors"

const game =(player,cpu)=>{
    if(player != cpu){
        if(player == "rock" && cpu == "paper"){
            console.log("cpu wins")
        }else if(player == "paper" && cpu == "scissors"){
            console.log("cpu wins")
        }else if(player == "scissors" && cpu == "paper"){
            console.log("Player wins")
        }else if(player == "paper" && cpu == "rock"){
            console.log("Player wins")
        }
    }else{
        console.log("TIE")
    }
}


game("paper","scissors")