// 2 jugadores usuario vs pc
// necesitamos reglasd
// preguntar nombre
// mostrar la opciones----> menu
//el jugador elige
// el pc "elige"
// evaluar el resultado
// mostrar resultado

let menu = `
opciones del juego
==================
elije el numero correspondiente a la jugada que prefieres
1- piedra
2- papel
3- tijeras
`
let nombre_humano = "Asimov"
let jugada_humano = 1
if (jugada_humano == 1){
    console.log (`piedra <--- la jugada de ${nombre_humano}`)
    
} else if (jugada_humano == 2 ){
    console.log (`papel <--- la jugada de ${nombre_humano}`)

}else { 
    console.log(`tijeras <--- la jugada de ${nombre_humano}`)

}
fecha = "2023/11/9"
console.log (fecha)
// jugada del pc
let jugada_pc = getRandomInt(1,4)
// partida
if (jugada_humano == jugada_pc){
    console.log (`habeis empatado`)
 } else if (jugada_pc == 1 && jugada_pc == 3 
    || (jugada_humano ==2 && jugada_pc==1) 
    || (jugada_humano == 3 && jugada_pc == 2))
    {
        console.log (`has ganado ${nombre_humano}`)
    } else{
        console.log (`has perdido ${nombre_humano}`)

    } 



function getRandomInt (min, max){
    min = Math.ceil (min);
    max = Math.floor (max);
    return Math.floor (Math.random() * (max- min) + min)
}