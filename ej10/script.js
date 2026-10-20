"use strict";

let salir = false;
while(!salir){
switch(prompt("1 – Mostrar la tabla de multiplicar de un número (con for).\n"+
"2 – Sumar números introducidos por el usuario hasta que introduzca uno vacío o cancele (con while(true) y break).\n"+
"3 – Mostrar solo los números impares del 1 al 20 (con for y continue).\n"+
"4 – Cuenta atrás desde un número dado hasta 0 (con do...while).\n"+
"0 – Salir")){
    case "1":
        let n = Number(prompt("numero"));
        let tabla = "";

        for(let i=1;i<=10;i++){
            tabla = tabla + `${n} * ${i} = ${n*i}\n`
        }

        alert(tabla)
        break;
    case "2":
        let suma = 0
        while(true){
            let b = prompt(`suma = ${suma}\n`)
            if(b == ""){
                break;
            }else{
                suma += Number(b);
            }
        }
        break;
    case "3":{
        let out = ""
        for(let i = 1;i<=20;i++){
            if(i%2==0){continue;}
            out = out + `${i}\n`
        }
        alert(out);}
        break;
    case "4":
        {let out = ""
        let numero = Number(prompt("Numero"))
        do{
            out = out + `${numero--}\n`
        }
        while(numero>=0)
        alert(out);}
        break;
    case "0":
    default:
        salir = true;
        alert("Saliendo");
        document.write("Programa finalizado");
}}