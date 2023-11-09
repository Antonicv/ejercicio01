// 2 jugadores usuario vs pc
// necesitamos reglasd
// preguntar nombre
// mostrar la opciones----> menu
//el jugador elige
// el pc "elige"
// evaluar el resultado
// mostrar resultado

// 
// pregunta nombre
// 


let nombre_humano = "";

do {
    let mensaje_inicial = `
    Vamos a jugar al piedra papel tijeras, 
    me llamo pc y tú ¿cómo te llamas?`;

    nombre_humano = prompt(mensaje_inicial);

    // Verifica si el nombre está definido y su longitud es mayor que cero && comprueva que las dos condiones sean true
    if (!(nombre_humano && nombre_humano.trim().length > 0)) {
        alert("Debes ingresar un nombre");
    }

} while (!(nombre_humano && nombre_humano.trim().length > 0));











let menu =  `
opciones del juego
==================
${nombre_humano} elije el numero correspondiente a la jugada que prefieres
1- piedra
2- papel
3- tijeras`

//ya tenemos la jugada del humano

let jugada_humano = prompt (menu)
let texto_resolucion_partida = ""

if (jugada_humano == 1 || jugada_humano == 2 || jugada_humano ==3){
    if (jugada_humano == 1){
        texto_resolucion_partida += (`piedra <--- tu jugada\n`)
        
    } else if (jugada_humano == 2 ){
        texto_resolucion_partida += (`papel <--- tu jugada\n`)
    
    }else {  
        texto_resolucion_partida += (`tijeras <--- tu jugada\n`)
    
    }
    // fecha = "2023/11/9"
    // console.log (fecha)
    // jugada del pc
    let jugada_pc = getRandomInt(1,4)
    
    if (jugada_pc == 1){
        texto_resolucion_partida += (`piedra <--- la jugada del pc\n`)
        
    } else if (jugada_pc == 2 ){
        texto_resolucion_partida += (`papel <--- la jugada del pc\n`)
    
    }else {  
        texto_resolucion_partida += (`tijeras <--- la jugada del pc \n`)
    
    }
    
    
    
    
    // partida
    if (jugada_humano == jugada_pc) {
        texto_resolucion_partida += `Habéis empatado\n`;
    } else if (
        (jugada_humano == 1 && jugada_pc == 3) ||
        (jugada_humano == 2 && jugada_pc == 1) ||
        (jugada_humano == 3 && jugada_pc == 2)
    ) {
        texto_resolucion_partida += `Has ganado ${nombre_humano}`;
    } else {
        texto_resolucion_partida += `Has perdido ${nombre_humano}`;
    }
    
    
    alert (texto_resolucion_partida)
}else{
    alert (`no me vaciles, agur`)
}





function getRandomInt (min, max){
    min = Math.ceil (min);
    max = Math.floor (max);
    return Math.floor (Math.random() * (max- min) + min)
}

