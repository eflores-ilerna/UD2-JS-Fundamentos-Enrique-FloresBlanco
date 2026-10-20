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

document.write(`Ultima Cancion: ${cancionUltima[0]} <br>`);

document.write("<h2>Playlist restante</h2><br><ol>")
playlist.forEach(cancion => {
    document.write(`<li>${cancion[0]}, ${cancion[1]}, Duración:${cancion[2]/60}min, género: ${cancion[3]}`)
});
