/*
let enlace = document.getElementById("enlacePopup");
*/
/*
enlace.addEventListener("click", function (event) {
    event.preventDefault();
    let anchoPopup = 600;
    let altoPopup = 400;

    let izquierda = (screen.width - anchoPopup) / 2;
    let arriba = (screen.height - altoPopup) / 2;

    let opciones = "width=" + anchoPopup + ",height=" + altoPopup + ",left=" + izquierda + ",top=" + arriba;

    window.open("prueba.html", "VentanaAbierta", opciones);
});

let caja = document.getElementById("contenedorNumeros");
let numeros = "<p>"
let contPrimos = 0;
for (let i = 1; i <= 500; i++) {
    if (i % 3 == 0) {
        numeros += i + ",";
    }
    if (i % 50 == 0) {
        numeros += "<br />";
    }
    let primo = true;
    let divisores = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            divisores++;
        }
    }
    if (divisores == 2) {
        contPrimos++;
    }
}
numeros += " Numeros primos : " + (500 - contPrimos) + "</p>"
caja.innerHTML = numeros;
*/
/*
let caja2 = document.getElementById("cajaMaxMin");
let arrayMaxMin = [];
for (let i = 0; i < 10; i++) {
    arrayMaxMin[i] = Number(prompt("Numero " + (i + 1)));
}
caja2.innerHTML = "<p>Minimo: " + Math.min(...arrayMaxMin) + ", Máximo: " + Math.max(...arrayMaxMin) + "</p>";
*/
/*
let talla = prompt("Talla europea:");

const equivalencias = {
    XXL: "Grande", XL: "Grande", L: "Grande",
    M: "Mediana",
    S: "Pequeña", XS: "Pequeña", XXS: "Pequeña"
};

let resultado = equivalencias[talla] || "No existe esa talla, asegúrese de poner las letras en mayúsculas";

alert(resultado);
*/

/*
let radio = Number(prompt("Radio:"));
let longitud = 2*Math.PI*radio;
alert("La longitud de la circunferencia con radio " + radio + " es: " + longitud);
*/
/*
let boleto = [];
let estrellas = [];
for (let i = 0; i < 5; i++) {
    let b = Math.floor(Math.random() * 50) + 1;
    if (boleto.includes(b)) {
        i--;
    } else {
        boleto.push(b);
    }
}
for (let i = 0; i < 2; i++) {
    let b = Math.floor(Math.random() * 10) + 1;
    if (estrellas.includes(b)) {
        i--;
    } else {
        estrellas.push(b);
    }
}
boleto.sort((a, b) => a - b);
estrellas.sort((a, b) => a - b);
console.log(boleto);
console.log(estrellas);


*/
/*
let filas = Number(prompt("Numero de filas:"))
let columnas = Number(prompt("Numero de columnas:"))
for (let i = 1; i <= filas; i++) {
    for (let j = 1; j <= columnas; j++) {
        if (i == filas || i == columnas || j == filas || j == columnas) {
            console.log(i + "," + j);
        }
    }
}
*/
