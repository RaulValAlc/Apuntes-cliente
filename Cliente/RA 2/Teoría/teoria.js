
let minombre;
let a = null;
let b = "cadena";
let c = 15;
let d = true;
alert(typeof minombre); //undefined
alert(typeof a); //objetc
alert(typeof b); //string
alert(typeof c); //number
alert(typeof d); //boolean

/*
function test() {
    let result = 1;
    result++;
    return result;
}
let obj = test();
console.log(obj);

var mensaje = "Hola Mundo!";
if (true) {
//var mensaje = "Se ha cambiado el mensaje variable global";
let mensaje = "Se ha cambiado el mensaje";
}
console.log(mensaje);

Con var, en ambos bucles la variable es la misma y por lo tanto la del segundo bloque machaca
la primera
for (var i = 0; i < 2; i++) {
    console.log("Tercero", i);
    for (var i = 0; i < 2; i++) {
        console.log("Cuarto", i);
    }
}
Con let es como si i fuese dos variables diferentes. Let tiene ambito detro del bloque 
for (let i = 0; i < 2; i++) {
    console.log("Primer", i);
    for (let i = 0; i < 2; i++) {
        console.log("Segundo", i);
    }
}


console.log(z); // ReferenceError: z is not defined
var i; // Variable declarada pero valor no inicializado
console.log(i); // undefined
console.log(x); //undefined
var x = 1;
i = 1;
console.log(i); // 1
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 1; */