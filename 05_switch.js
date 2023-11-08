



let dias_semana = "jueves"
let mensaje = ""
switch (dias_semana) {
    case "lunes" :
        mensaje = "hoy es laborable"
        break
    case "martes" :
        mensaje = "hoy es laborable"
        break
    case "miercoles" :
        mensaje = "hoy es laborable"
        break
    case "jueves" :
        mensaje = "hoy es laborable"
        break
    case "viernes" :
        mensaje = "hoy es laborable"
        break
    default:
        mensaje = "no es laborable"
    }

    switch (dias_semana) {
        case "lunes" :
        case "martes" :
        case "miercoles" :
        case "jueves" :
        case "viernes" :
            mensaje = "hoy es laborable"
            break
        default:
            mensaje = "no es laborable"
        }
