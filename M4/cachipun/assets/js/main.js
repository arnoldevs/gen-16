const opciones = ["piedra", "papel", "tijera"];
const resultado = document.getElementById("resultado");
const puntosJugador = document.getElementById("puntosJugador");
const puntosComputadora = document.getElementById("puntosComputadora");
const modoJuegoSelect = document.getElementById("modoJuego");

let puntosJugadorTotal = 0;
let puntosComputadoraTotal = 0;
let rondasJugadas = 0;
let modoJuego = 1; // Por defecto, mejor de 1

function jugar(opcionJugador) {
  const opcionComputadora =
    opciones[Math.floor(Math.random() * opciones.length)];

  switch (opcionJugador + opcionComputadora) {
    case "piedrapiedra":
    case "papelpapel":
    case "tijeratijera":
      resultado.textContent = "Empate!";
      break;
    case "piedratijera":
    case "papelpiedra":
    case "tijerapapel":
      puntosJugadorTotal++;
      resultado.textContent = "¡Ganaste!";
      break;
    default:
      puntosComputadoraTotal++;
      resultado.textContent = "¡Perdiste!";
  }

  puntosJugador.textContent = puntosJugadorTotal;
  puntosComputadora.textContent = puntosComputadoraTotal;
  rondasJugadas++;

  if (rondasJugadas === modoJuego) {
    if (puntosJugadorTotal > puntosComputadoraTotal) {
      resultado.textContent = "¡Ganaste el juego!";
    } else if (puntosJugadorTotal < puntosComputadoraTotal) {
      resultado.textContent = "¡Perdiste el juego!";
    } else {
      resultado.textContent = "¡Empate en el juego!";
    }
    // Reiniciar los contadores para una nueva partida
    puntosJugadorTotal = 0;
    puntosComputadoraTotal = 0;
    rondasJugadas = 0;
  }
}

// Agregar eventos a los botones
const piedra = document.getElementById("piedra");
piedra.addEventListener("click", () => jugar("piedra"));
const papel = document.getElementById("papel");
papel.addEventListener("click", () => jugar("papel"));
const tijera = document.getElementById("tijera");
tijera.addEventListener("click", () => jugar("tijera"));

// Agregar evento al selector de modo de juego
modoJuegoSelect.addEventListener("change", () => {
  modoJuego = parseInt(modoJuegoSelect.value);
  rondasJugadas = 0;
  puntosJugadorTotal = 0;
  puntosComputadoraTotal = 0;
  resultado.textContent = "";
  puntosJugador.textContent = "0";
  puntosComputadora.textContent = "0";
});
