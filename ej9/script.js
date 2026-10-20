"use strict";

let nombre = prompt("Nombre:");
let apodo = prompt("Apodo:");
let edad = prompt("Edad:");

let apodoFinal = "Anonimo"

if(apodo != "" || nombre != ""){
    apodoFinal = nombre==""?apodo:nombre;
}

document.write(apodoFinal + "<br>");

if(apodoFinal != "Anonimo" && edad > 18){
    document.write("<br>Acceso permitido<br>")
}

