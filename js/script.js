

let menu = false;

while (!menu) {
    let opciones = prompt(
        '--Calculadora--\n' +
        'Elije un opcion de calculo para dos numeros:\n' +
        '1.Suma\n' +
        '2.Resta\n' +
        '3.Multiplicacion\n' +
        '4.Divicion\n'
    )
    
    switch(opciones) {
        case "Suma":
        case "1":
            Suma()
            break
        case "Resta":
        case "2":
            Resta()
            break
        case "Multuplicacion":
        case "3":
            Multiplicacion()
            break
        case "Divicion":
        case "4":
            Divicion()
            break
    }
}

function Suma() {
    let n1 = parseInt(prompt("Elija el primer numero para sumar:"))

    if (isNaN(n1) === true) {
        alert("Debes ingresar un numero!!")
        return
    } 

    let n2 = parseInt(prompt("Elija el primer segundo para sumar:"))
    
    if (isNaN(n2) === true) {
        alert("Debes ingresar un numero!!")
        return
    }

    alert(n1 + n2);
}

function Resta() {
    let n1 = parseInt(prompt("Elija el primer numero para restar:"))

    if (isNaN(n1) === true) {
        alert("Debes ingresar un numero!!")
        return
    } 

    let n2 = parseInt(prompt("Elija el primer segundo para restar:"))
    
    if (isNaN(n2) === true) {
        alert("Debes ingresar un numero!!")
        return
    }

    alert(n1 - n2);
}

function Multiplicacion() {
    let n1 = parseInt(prompt("Elija el primer numero para multiplicar:"))

    if (isNaN(n1) === true) {
        alert("Debes ingresar un numero!!")
        return
    } 

    let n2 = parseInt(prompt("Elija el primer segundo para multiplicar:"))
    
    if (isNaN(n2) === true) {
        alert("Debes ingresar un numero!!")
        return
    }

    alert(n1 * n2);
}

function Divicion() {
    let n1 = parseInt(prompt("Elija el primer numero para divicion:"))

    if (isNaN(n1) === true) {
        alert("Debes ingresar un numero!!")
        return
    } 

    let n2 = parseInt(prompt("Elija el primer segundo para divicion:"))
    
    if (isNaN(n2) === true) {
        alert("Debes ingresar un numero!!")
        return
    }

    alert(n1 / n2);
}