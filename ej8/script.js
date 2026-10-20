"use strict";

let nota = prompt("Escribe una nota")


if(nota < 0 || nota > 10){
    document.write("Nota invalida");
}else if(nota < 5){
    document.write("Suspenso");
}
else if(nota < 7){
    document.write("Aprobado");
}else{
    document.write(nota<9?"Notable":"Sobresaliente")
}

/*
else if(nota < 9){
    document.write("Notable");
}
else{
    document.write("Sobresaliente")
}*/
