let NotaProyecto = Number(prompt("Nota Proyecto:"));
let NotaExamen = Number(prompt("Nota Examen:"));
let media = NotaExamen * 0.6 + NotaProyecto * 0.4;
let texto = "Media: " + media.toFixed(2) + " Calificación: ";
if (NotaExamen < 4.5 || NotaProyecto < 4.5) {
    alert(texto + "Suspenso");
} else {
    if (media >= 9) {
        alert(texto + "Sobresaliente");
    } else {
        if (media >= 7) {
            alert(texto + "Notable");
        } else {
            if (media >= 5) {
                alert(texto + "Aprobado");
            } else {
                alert(texto + "Suspenso");
            }
        }
    }
}

