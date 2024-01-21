const prompt = require("prompt-sync")({sigint: true});

let puntosmaquina = 0;
let puntoshumano = 0;
let resultadofinal;

// PROGRAMA
let quienGana
for (let i = 0 ; i < 3; i++){
    quienGana = jugar()
    if (quienGana == "maquina") {
        console.log ("")
    }
}

console.log ('Resultado final -> Humano con ' + puntoshumano + ' puntos | Maquina con ' + puntosmaquina + ' puntos')

//ERROR BOBO
function eleccion (){
    let eleccionusuario = prompt("Que opcion eliges? piedra, papel o tijeras?");
    eleccionusuario = eleccionusuario.toLowerCase();
    while (!(eleccionusuario === "piedra" || eleccionusuario === "papel"|| eleccionusuario === "tijeras")) {
        console.log ("INGRESA UNA OPCION VALIDA") 
        eleccionusuario = prompt("Que opcion eliges? piedra, papel o tijeras?");
        eleccionusuario = eleccionusuario.toLowerCase();
    }
    return eleccionusuario
} 


// FUNCIONES
function jugar(){
    
    let jugador = eleccion(); 
    let maquina = eleccionMaquina();
    console.log(`Tu has elegido: ${jugador}`);
    console.log(`La maquina ha elegido: ${maquina}`);

        //EL JUGADOR GANA SI 
    if ((jugador === "papel" && maquina ==="piedra") || (jugador ==="piedra" && maquina ==="tijeras") || (jugador ==="tijeras" && maquina ==="papel")){
        console.log(`EL HUMANO GANA! ${jugador} vence ${maquina}`) 
        puntoshumano++;
        
        
    }
       //SI ES UN EMPATE
    else if ((jugador === "piedra" && maquina === "piedra") || (jugador === "papel" && maquina === "papel") || (jugador === "tijeras" && maquina === "tijeras")) {
        console.log ("EMPATE");
    } else {
        console.log(`LA MAQUINA GANA! ${maquina} vence ${jugador}`);  
        
        puntosmaquina++;
    }
}

function eleccionMaquina() {
    const options = ["tijeras" , "piedra" , "papel"];
    return options[Math.floor(Math.random()* options.length)];
}

if (puntoshumano > puntosmaquina){
    resultadofinal = 'Has ganado'
}else if (puntoshumano < puntosmaquina){
    resultadofinal = 'La maquina ha ganado'
} else {
    resultadofinal = 'HABEIS QUEDADO EMPATE :)'
}
console.log(resultadofinal);