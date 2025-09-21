// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I've been watching you for some time", time: 14 },
  { text: "Can't stop staring at those ocean eyes", time: 20 },
  { text: "Burning cities and napalm skies", time: 26 },
  { text: "Fifteen flares inside those ocean eyes", time: 33 },
  { text: "Your ocean eyes", time: 39 },
  { text: "No fair", time: 42 },
  { text: "You really know how to make me cry", time: 49 },
  { text: "When you give me those ocean eyes", time: 52 },
  { text: "I'm scared", time: 55 },
  { text: "I've never fallen from quite this high", time: 62 },
  { text: "Falling into your ocean eyes", time: 66 },
  { text: "Those ocean eyes", time: 69 },
  { text: "I've been walking through a world gone blind", time: 73 },
  { text: "Can't stop thinking of your diamond mind", time: 79 },
  { text: "Careful creature made friends with times", time: 86 },
  { text: "He left her lonely with a diamond mind", time: 92 },
  { text: "And those ocean eyes", time: 99 },
  { text: "No fair (no fair)", time: 102 },
  { text: "You really know how to make me cry", time: 109 },
  { text: "When you gimme those ocean eyes (those ocean eyes)", time: 112 },
  { text: "I'm scared (I'm scared)", time: 116 },
  { text: "I've never fallen from quite this high", time: 122 },
  { text: "Falling into your ocean eyes", time: 125 },
  { text: "Those ocean eyes", time: 129 },
  { text: "Da, da, da, da, da, da, da, da, da, da", time: 138 },
  { text: "Da, da, da, da, da, da, da, da, da, da", time: 146 },
  { text: "Hmm, hmm, hmm", time: 153 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
