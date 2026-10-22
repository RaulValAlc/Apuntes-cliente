
/* Ejercicio 9
let boton = document.getElementById("boton");
boton.addEventListener("click", function () {
    let ciudad = prompt("Inserte el nombre de una ciudad");
    switch (ciudad) {
        case "Zaragoza":
            alert("Capital de aragón");
            break;
        case "Barcelona":
            alert("Capital de cataluña");
            break;
        case "Madrid":
            alert("Capital de España");
            break;
        default:
            alert("No conozco esa ciudad")
            break;
    }
});
/*

/* Ejercicio 8
let num = Number(prompt("Numero a calcular el factorial:"))
let sol = 1;
let caja = document.getElementById("caja");
for (let i = num; i > 0; i--) {
    sol += sol * i;
}
caja.innerHTML = "El factorial de " + num + " es: " + sol;
/* Ejercicio 7
let caja = document.getElementById("caja");
for (let i = 0; i < 30; i++) {
    caja.innerHTML += i ;
    if(i!=29){
        caja.innerHTML += ", " ;
    }
}
*/

/* Ejercicio 6
let num1 = Number(prompt("Numero 1"));
let num2 = Number(prompt("Numero 2"));
let positivo = num1 >= 0 && num2 >= 0 
if (num1 > num2) {
    alert(num1 + " es mayor que " + num2);
} else if (num2 > num1) {
    alert(num2 + " es mayor que " + num1);
} else {
    alert(num1 + " y " + num2 + " son iguales!");
}
if(positivo){
    alert("Ambos numeros son positivos");
}else{
    alert("Alguno de los dos numero es negativo");
}
*/

/* Ejercicio 5
let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
for (let i = 0;i< meses.length;i++){
    alert(meses[i]);
}
/* Ejercicio 4
let num = Number(prompt("Numero:"));
if(num%2 === 0){
    alert("El numero " + num + " es par");
}else{
    alert("El numero " + num + " es impar");
} 
*/

/* Ejercicio 3
let num = Number(prompt("Numero:"));
if(num%2 === 0){
    alert("El numero " + num + " es par");
}else{
    alert("El numero " + num + " es impar");
} 
*/

/* Ejercicio 2
let num = Number(prompt("Numero a elevar"));
let exp = Number(prompt("Exponente"));
let sol = num ** exp;
let caja = document.getElementById("caja");
caja.innerHTML = "El exponencial con base " + num + " exponente:  " + exp + " es: " + sol;
*/

/* Ejercicio 1
let nombre = prompt("Introduzca su nombre:");
let apellido = prompt("Introduzca su apellido:");
let fullName = (nombre + " " + apellido);
let edad = Number(prompt("Introduzca su edad:"));
let nacimiento = 2026 - edad;
let cajaDatos = document.getElementById("cajaDatos");
cajaDatos.innerHTML = "Nombre: " + fullName + "<br>" + "Año nacimiento: " + nacimiento;
*/
