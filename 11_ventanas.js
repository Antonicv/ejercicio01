//ventanas interactivas

//aviso
alert ("soy un alert!!")
//  confirmacion =
let respuesta = confirm("¿ estas de acuerdo?")
let codigo = "<p style='color:red'>" + respuesta + "</p>"
document.getElementById("ventana").innerHTML= codigo 
let nombre = prompt ("como te llamas?")
alert(`te llamas ${nombre}`)

//ejercicio
let edad = prompt ("que edad tienes?")

