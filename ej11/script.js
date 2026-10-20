"use strict";


const playlist=[
    ["bohemian rhapsody","queen",354,"Rock"],
    ["Hotel Calidornia","Eagles",391,"Rock"],
    ["Imagine","John Lennon",183,"Pop"]
]

let cancion1 = ["Imagine 2","John Lennon 2",185,"Pop"];
let cancion2 = ["We Will Rock You","Queen",230,"Rock"];

playlist.push(cancion1);
playlist.push(cancion2);

let cancionUltima = playlist.pop();

playlist[0].push(1975);

document.write(`Ultima Cancion: ${cancionUltima[0]} `);

document.write("<h3>Playlist restante</h3><ol>")
playlist.forEach(cancion => {
    document.write(`<li>${cancion[0]}, ${cancion[1]}, Duración:${cancion[2]/60}min, género: ${cancion[3]}`)
});


document.write("</ol><h2>Parte 2</h2>")
playlist.splice(1,0,["We Will Rock You","Queen",230,"Rock"])


let eliminada = playlist.splice(2,1)[0];



playlist.splice(0,1,eliminada);


document.write("<h3>Cancion eliminada</h3>")
document.write(`<li>${eliminada[0]}, ${eliminada[1]}, Duración:${eliminada[2]/60}min, género: ${eliminada[3]}`)



document.write("<h3>Playlist restante</h3><ol>")
playlist.forEach(cancion => {
    document.write(`<li>${cancion[0]}, ${cancion[1]}, Duración:${cancion[2]/60}min, género: ${cancion[3]}`)
});




