"use strict";



// comparacion de numeros simple
document.write(`2 > 1: ${2 > 1}<br>`);

// JS convierte la cadena a numero
document.write(`"2" > 1: ${"2" > 1}<br>`);

// igual que el anterior, el 0 desaparece
document.write(`"01" == 1: ${"01" == 1}<br>`);

// 0 se considera con el mismo valor que falso
document.write(`0 == false: ${0 == false}<br>`);

// La cadena vacía se considera con el mismo valor que falso
document.write(`""== false: ${""== false}<br>`);

// tienen el mismo valor, pero diferentes tipos.
document.write(`0 === false: ${0 === false}<br>`);

// Se consideran el mismo valor
document.write(`null == undefined: ${null == undefined}<br>`);

// No se consideran el mismo tipo
document.write(`null === undefined: ${null === undefined}<br>`);

// null no es un numero, así que siempre es falso
document.write(`null > 0,: ${null > 0}<br>`);

// null no es un numero, así que siempre es falso
document.write(`null >= 0: ${null >= 0}<br>`);

//undefined no es un número
document.write(`undefined == 0 : ${undefined == 0 }<br>`);

// las cadenas se comparan alfabéticamente
document.write(`"Glow" > "Glee": ${"Glow" > "Glee"}<br>`);

