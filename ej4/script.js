"use strict";

let nombre = prompt("¿Como te llamas?");
let ciudad = prompt("¿donde vives?");
let ano = prompt("Cuando nacistes?");

if(nombre == null || ciudad == null || ano == null){
    document.write("Cancelado")
}
else{
    let now = new Date()
    document.write(`Hola, ${nombre} de ${ciudad}. Tienes ${Number(now.getFullYear()) - Number(ano)}`)
};

