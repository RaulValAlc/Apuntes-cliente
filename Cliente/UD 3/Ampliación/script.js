const figuras = ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"];
const peones = ["♟"];
let tabla = document.getElementById("tabla");
for (let i = 1; i <= 8; i++) {
    let fila = tabla.insertRow();
    for (let j = 1; j <= 8; j++) {
        let celda = fila.insertCell();
        if ((i + j) % 2 == 0) {
            celda.style.backgroundColor = "gray";
        } else {
            celda.style.backgroundColor = "beige";
        }
        //Peones
        if (i == 2 || i == 7) {
            celda.innerHTML = peones[0];
        }
        if (i == 1 || i == 8) {
            celda.innerHTML = figuras[j - 1];
        }
        //Color negro
        if (i < 3) {
            celda.style.color = "black";
        }
        //Color blanco
        if (i > 6) {
            celda.style.color = "white";
        }
    }
}

