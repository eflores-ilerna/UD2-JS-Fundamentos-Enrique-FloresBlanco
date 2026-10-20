"use strict";

let a = prompt("numero 1");
let b = prompt("numero 2");



document.write(`Suma: ${Number(a)+Number(b)}<br>`);
document.write(`Resta: ${Number(a)-Number(b)}<br>`);
document.write(`Multiplicacion: ${Number(a)*Number(b)}<br>`);
document.write(`Division: ${Number(a)/Number(b)}<br>`);

document.write("let counter = 0<br>")
let counter = 0;
//counter++ se evalua, y luego incrementa. La variable no se ha incrementado al escribirse
document.write(`counter++: ${counter++}<br>`);
//++counter incrementa primero, y luego evalua. La variable se esribe despues de incrementarse
document.write(`++counter: ${++counter}`);