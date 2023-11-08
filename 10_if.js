//if
// if / else
// IF / ELSE IF / ELSE

let llueve = false
let loQueVoyHacer = ""

if (llueve) {loQueVoyHacer = "necesito un paraguas"}
else {loQueVoyHacer = " me noy de paseo"}

document.getElementById ("JS_1").innertext =loQueVoyHacer

let dias_semana = "viernes"
let mensaje = ""
if (dias_semana == "lunes") {
    mensaje = `hoy es ${dia_semana}`
} else if (dias_semana == "martes") {
    mensaje = `hoy no es $ {dia_semana} `
} else {
    mensaje = "hoy no es ni lunes ni martes"
}
document.getElementById("JS_1").innerText = mensaje
