"use strict";

let a = prompt("numero 1");
let b = prompt("numero 2");


document.write(`Suma incorrecta: ${a+b}<br>`);
document.write(`Suma correcta: ${Number(a)+Number(b)}<br>`);


let valores = ["123"," 45 ", "abc", "", "0", 0 , null, undefined,true]
document.write("<table>")
document.write("<tr><td>Valor</td>")
valores.forEach(valor => {
    document.write(`<td>"${valor}"</td>`)
});
document.write("</tr>")
document.write("<tr><td>Resultado</td>")
valores.forEach(valor => {
    document.write(`<td>${Number(valor)}</td>`)
});
document.write("</tr>")

document.write("</table>")
