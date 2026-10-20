"use strict";

let fechaHoy = new Date();
let diaActual = fechaHoy.getUTCDate();
console.log(diaActual);

let diaEvento = 0;
while (diaEvento <= diaActual){
    diaEvento = Math.floor(Math.random()*31);
};

console.log(diaEvento);


let fechaEvento = new Date(fechaHoy.getFullYear(),fechaHoy.getMonth(),diaEvento)

document.write(`La fecha actual es ${fechaHoy.toLocaleString()}<br>`);
document.write(`La fecha del evento es ${fechaEvento.toLocaleString()}<br>`);
document.write(`Quedan ${diaEvento-diaActual} días para el evento<br>`);