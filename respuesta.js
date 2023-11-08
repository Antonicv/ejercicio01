// preguntar edad

let edad = prompt ("cual es tu edad?")

// alert (typeof edad)
if ((edad == null)|| (edad =="") || (isNaN(edad))) {
    alert ("debes escribir tu edad correctamente")
}else{

if (edad < 18 ){
    alert (`tienes ${edad} años\n y eres menor de edad`)
} else {
    alert (`tienes ${edad} años\n y eres mayor de edad`)
}}