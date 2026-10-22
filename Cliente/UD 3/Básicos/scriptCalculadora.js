let btnBorrar = document.getElementById("btnBorrar");
let btnCuadrado = document.getElementById("cuadrado");
let btnRaiz = document.getElementById("raiz");
let btnResultado = document.getElementById("btnResultado");
let ventanaResultado = document.getElementById("ventanaResultado");
let btnOperando = document.getElementsByName("operacion");
let btnSimbolo = document.getElementsByName("simbolo");
let operando = 1;
let numero1 = "";
let numero2 = "";
let operacion = "";
let simbolo = false;

btnResultado.addEventListener("click", function (event) {
    event.preventDefault();
    let resultado = 0;
    if (!isNaN(numero1) && !isNaN(numero2) && operacion !== "") {
        switch (operacion) {
            case "+":
                resultado = Number(numero1) + Number(numero2);
                break;
            case "-":
                resultado = Number(numero1) - Number(numero2);
                break;
            case "*":
                resultado = Number(numero1) * Number(numero2);
                break;
            case "/":
                resultado = Number(numero1) / Number(numero2);
                break;
        }
        ventanaResultado.innerHTML = "Resultado = " + resultado;
        operando = 1;
        numero1 = resultado;
        numero2 = "";
        operacion = "";
    }
});

btnBorrar.addEventListener("click", function (event) {
    event.preventDefault();
    numero1 = "";
    numero2 = "";
    operando = 1;
    simbolo = false;
    ventanaResultado.innerHTML = "";
});

btnRaiz.addEventListener("click", function (event) {
    event.preventDefault();
    numero1 = Math.sqrt(numero1);
    ventanaResultado.innerHTML = numero1;
    numero2 = "";
    operando = 1;
    simbolo = false;
});

btnCuadrado.addEventListener("click", function (event) {
    event.preventDefault();
    numero1 = (numero1) ** 2;
    ventanaResultado.innerHTML = numero1;
    numero2 = "";
    operando = 1;
    simbolo = false;
});

btnOperando.forEach(function (boton) {
    boton.addEventListener("click", function (event) {
        if (operando == 1) {
            let numero = event.target.value.trim();
            numero1 += numero;
        } else {
            let numero = event.target.value.trim();
            numero2 += numero;
        }
        simbolo = false;
        ventanaResultado.innerHTML = numero1 + " " + operacion + " " + numero2;
    });
});

btnSimbolo.forEach(function (boton) {
    boton.addEventListener("click", function (event) {
        if (!isNaN(numero1) && numero1 !== "" && !simbolo) {
            operacion = event.target.value.trim();
            operando++;
            simbolo = true;
            ventanaResultado.innerHTML = numero1 + " " + operacion + " " + numero2;
        }
    });
});
