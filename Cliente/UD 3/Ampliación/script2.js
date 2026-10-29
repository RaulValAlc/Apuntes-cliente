let divPalabras = document.getElementById("palabras");
let calificaciones = document.getElementById("calificaciones");
var notas = new Array(4.5, 4, 6, 1, 7.5, 10, 5.25, 4.5, 2, 1, 8, 7.5, 1, 7.5, 8);

calificaciones.innerHTML = "Número de alumnos aprobados: ";
let aprobados = 0;
notas.forEach(function (nota) {
    if (nota >= 5) {
        aprobados++;
    }
});
calificaciones.innerHTML += aprobados + "<br>";

calificaciones.innerHTML += "Notas no repetidas: ";
let repetidos = [];
for (let i = 0; i < notas.length; i++) {
    let unico = true;
    for (let j = 0; j < notas.length; j++) {
        if (j != i) {
            if (notas[j] == notas[i]) {
                unico = false;
            }
        }
    }
    if (unico) {
        repetidos.push(notas[i]);
    }
}
calificaciones.innerHTML += repetidos.join(", ") + "<br>";

calificaciones.innerHTML += "Notas pares de los alumnos que han suspendido: ";
suspendidos(notas).forEach(function (nota) {
    if (nota % 2 == 0) {
        calificaciones.innerHTML += nota + ", ";
    }
});
calificaciones.innerHTML = calificaciones.innerHTML.slice(0, -2);

calificaciones.innerHTML += "<br> Notas impares de alumnos con al menos un 7: "
let impar = [];
notas.forEach(function (nota) {
    if (nota >= 7 && Math.trunc(nota) % 2 != 0) {
        impar.push([nota]);
    }
});
calificaciones.innerHTML += impar.join(", ") + "<br>";
/* Método mas actual
notas = notas.filter(function (nota) {
    return nota >= 5;
});
*/
let eliminados = 0;
for (let i = notas.length - 1; i >= 0; i--) {
    if (notas[i] < 5) {
        notas.splice(i, 1);
        eliminados++;
    }
}
for (let i = 0; i < eliminados; i++) {
    notas.push(aleatorio());
}
notas.sort(function (a, b) {
    return b - a;
});
calificaciones.innerHTML += "Nuevo array de notas ordenadas: " + notas.join(", ");

function aleatorio() {
    return Math.floor((Math.random() * 6) + 5);
}

function suspendidos(notas) {
    let suspensos = [];
    notas.forEach(function (nota) {
        if (nota < 5) {
            suspensos.push(nota);
        }
    });
    return suspensos;
}

function pulsar() {
    let elementoTextarea = document.getElementsByName("mitexto")[0];
    let texto = elementoTextarea.value;
    let palabras = texto.split(" ");
    divPalabras.innerHTML = "El textarea contiene: " + palabras.length + " palabras" +
        " la primera palabra es: " + palabras[0] + " y la última es: " + palabras[palabras.length - 1];
}