function saludarA (nombre){
    console.log("Hola " + nombre)
}

/* saludarA("lu")
function calcularDoble(numero){
    return "El doble de tu número (" + numero + ") es " + (numero*2)
}


let pideNumero = prompt("Dame un numero")

let resultado = calcularDoble(pideNumero)


alert(resultado) */

/* numero = 10
numero * 2

function calcularDoble(numero){
    return numero * 2
} */


//parametro
/* let cantidad = 3
let acumulador = 0 */
/*  donde empieza, condición, acumulación*/
/* for (let contador = 1; contador <= cantidad; contador = contador + 1){
    let solicitarNumero =  Number(prompt("Dame un número"))
    acumulador = acumulador + solicitarNumero
}

console.log(acumulador) */

/* sumatoria(12)
sumatoria(3) */

/* 
function sumatoria (numero){
    let acumulador = 0
    for (let contador = 1; contador <= numero; contador= contador +1 ){
        let solicitarNumero = Number(prompt("Dame un número"))
        acumulador = acumulador + solicitarNumero
    }
    return acumulador
}


let resultado = sumatoria(2)
console.log(resultado)
 */


function seleccionar (valor){
    let simboloRecibido = valor
    if (simboloRecibido === "+"){
        return "Sumar"
    }else if (simboloRecibido === "-"){
        return "Restar"
    }else if (simboloRecibido === "*"){
        return "Multiplicar"
    }else{
        return null
    }
    return simboloRecibido
}
let simboloSeleccionado = seleccionar(prompt("Ingrese: +, - o *"))

console.log(simboloSeleccionado)
