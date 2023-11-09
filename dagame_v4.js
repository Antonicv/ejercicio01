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
let nombre_humano = "";
let nombre_falso = true; // Inicializa la variable para el bucle

do {
    let mensaje_inicial = `Vamos a jugar al piedra papel tijeras, 
    me llamo pc y tu?`;
    nombre_humano = prompt(mensaje_inicial);

    // Verifica si el nombre no está vacío o es nulo
    // Verifica si el nombre está vacío o es nulo
    if (!nombre_humano || nombre_humano.trim().length === 0) {
        alert("Debes ingresar un nombre válido.");
    }

} while (!nombre_humano || nombre_humano.trim().length === 0);

// Menú del juego
let menu = `
Opciones del juego
==================
${nombre_humano} elige el número correspondiente a la jugada que prefieres
1- piedra
2- papel
3- tijeras`;

// Obtiene la jugada del humano
let jugada_humano = prompt(menu);
let texto_resolucion_partida = "";

if (jugada_humano == 1 || jugada_humano == 2 || jugada_humano == 3) {
    // Muestra la jugada del humano
    if (jugada_humano == 1) {
        texto_resolucion_partida += (`Piedra <--- Tu jugada\n`);
    } else if (jugada_humano == 2) {
        texto_resolucion_partida += (`Papel <--- Tu jugada\n`);
    } else {
        texto_resolucion_partida += (`Tijeras <--- Tu jugada\n`);
    }

    // Obtiene la jugada del PC
    let jugada_pc = getRandomInt(1, 4);

    // Muestra la jugada del PC
    if (jugada_pc == 1) {
        texto_resolucion_partida += (`Piedra <--- La jugada del PC\n`);
    } else if (jugada_pc == 2) {
        texto_resolucion_partida += (`Papel <--- La jugada del PC\n`);
    } else {
        texto_resolucion_partida += (`Tijeras <--- La jugada del PC\n`);
    }

    // Determina el resultado de la partida
    if (jugada_humano == jugada_pc) {
        texto_resolucion_partida += `Habéis empatado\n`;
    } else if (
        (jugada_pc == 1 && jugada_pc == 3) ||
        (jugada_humano == 2 && jugada_pc == 1) ||
        (jugada_humano == 3 && jugada_pc == 2)
    ) {
        texto_resolucion_partida += `felicidades!! \n Has ganado ${nombre_humano}`;
    } else {
        texto_resolucion_partida += `lo siento\n Has perdido ${nombre_humano}`;
    }

    alert(texto_resolucion_partida);
} else {
    alert(`No me vaciles, agur`);
}

// Función para obtener un número entero aleatorio entre min y max (ambos inclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
