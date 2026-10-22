let num = Number(prompt("Numero DNi"));
let letra = prompt("Letra DNI").toUpperCase();
let dni = String(num) + letra;
let abecedario = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C',
'K', 'E'];
if(num < 0 || num > 99999999){
    alert("Numero no válido");
}else{
    let resto = num % 23;
    if(letra === abecedario[resto]){
        alert("DNI correcto");
    }else{
        alert("DNI incorrecto");
    }
}