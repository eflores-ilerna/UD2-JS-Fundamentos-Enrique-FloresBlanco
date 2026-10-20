"use strict";

let number = 5;
let bigint = 5n;
let string = "Cadena";
let nuull = null;
let undeefined = undefined;
let symbol = Symbol("aaa");


document.write(typeof(number)+"<br>");
document.write(typeof(bigint)+"<br>");
document.write(typeof(string)+"<br>");
document.write(typeof(nuull)+"<br>"); //El tipo de null es object según la especificación de ECMAScript, porque la primera implementación de JS lo reconocía como "object"
document.write(typeof(undeefined)+"<br>");
document.write(typeof(symbol)+"<br>");