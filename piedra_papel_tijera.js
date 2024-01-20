const prompt = require("prompt-sync")({sigint: true});

// PROGRAMA
let quienGana
for (let i = 0 ; i < 3; i++){
    quienGana = jugar()
    if (quienGana == "maquina") {
        console.log ("")
    }
}


// FUNCIONES
function jugar(){
    
    let jugador = eleccion(); 
    let maquina = eleccionMaquina();
    console.log(`Tu has elegido: ${jugador}`);
    console.log(`La maquina ha elegido: ${maquina}`);

        //EL JUGADOR GANA SI 
    if ((jugador === "papel" && maquina === "piedra") || (jugador === "piedra" && maquina === "tijeras") || (jugador === "tijeras" && maquina === "papel")){
        console.log(`El humano gana! ${jugador} vence ${maquina}`);
        return "maquina";
    }
       //SI ES UN EMPATE
    else if ((jugador === "piedra" && maquina === "piedra") || (jugador === "papel" && maquina === "papel") || (jugador === "tijeras" && maquina === "tijeras")) {
        console.log ("EMPATE");
    } else {
        console.log(`La maquina gana! ${maquina} vence ${jugador}`);  
        return 0;
    }
}



function eleccion (){
    let eleccion = prompt("Que opcion eliges? piedra, papel o tijeras?");
    eleccion = eleccion.toLowerCase();
    while (!eleccion == "piedra" , "papel" , "tijera") {
        console.log ("Ingresa una opcion valida") 
    }
    return eleccion;
} 



function eleccionMaquina() {
    const options = ["tijeras" , "piedra" , "papel"];
    return options[Math.floor(Math.random()* options.length)];
}