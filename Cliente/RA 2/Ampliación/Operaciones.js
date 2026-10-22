// Caja 1
let caja = document.getElementById("caja1");
let codigoTabla = '<table border="1" solid black> <tr> <th>Operación</th> <th>Resultado</th> </tr>';
for (let i = 0; i <= 10; i++) {
    codigoTabla += "<tr> <td> 7 x " + i + " = </td> <td>" + (7 * i) + "</td> </tr>";
}
codigoTabla += "</table>";
caja.innerHTML = codigoTabla;
// Caja 2
let caja2 = document.getElementById("caja2");
let j = 0;
let codigoTabla2 = '<table border="1" solid black> <tr> <th>Operación</th> <th>Resultado</th> </tr>';
while (j <= 10) {
    codigoTabla2 += "<tr> <td> 8 + " + j + " = </td> <td>" + (8 * j) + "</td> </tr>";
    j++;
}
caja2.innerHTML = codigoTabla2;
// Caja 3
let caja3 = document.getElementById("caja3");
let z = 0;
let codigoTabla3 = '<table border="1" solid black> <tr> <th>Operación</th> <th>Resultado</th> </tr>';
while (z <= 10) {
    codigoTabla3 += "<tr> <td> 9 / " + z + " = </td> <td>" + (9 / z) + "</td> </tr>";
    z++;
}
caja3.innerHTML = codigoTabla3;
//Párrafos
let parr1 = document.getElementById("parrafo1");
let parr2 = document.getElementById("parrafo2");
let parr3 = document.getElementById("parrafo3");
let parr4 = document.getElementById("parrafo4");
parr1.innerHTML = "<b> 125 / 8 con desplazamiento de bits = " + (125 >> 3) + "</b>";
parr2.innerHTML = "<b> 40 x 4 con desplazamiento de bits = " + (40 << 2) + "</b>";
parr3.innerHTML = "<b> 25 / 2 con desplazamiento de bits = " + (25 >> 1) + "</b>";
parr4.innerHTML = "<b> 10 x 16 con desplazamiento de bits = " + (10 << 4) + "</b>";