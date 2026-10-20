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

document.write(`?? null: ${null ??"null value"}<br>`)
document.write(`?? 0: ${0 ??"null value"}<br>`)

document.write(`|| null: ${null ||"null value"}<br>`)
document.write(`|| 0: ${0 ||"null value"}<br>`)
/* resultado
?? null: null value
?? 0: 0
|| null: null value
|| 0: null value

|| devuelve el operador derecho si el operador izquierdo es falsy, es decir, se interpreta como el booleano false (ej "",0)
?? solo lo devuelve si es nulo o undefined
*/

document.write( `!!0 === false: ${!!0 === false}`)