const opciones = ["piedra", "papel", "tijera"];
const resultado = document.getElementById("resultado");
const jugada = document.getElementById("jugada");
const reiniciarJuego = document.getElementById("reiniciar");
const puntosJugador = document.getElementById("puntosJugador");
const puntosComputadora = document.getElementById("puntosComputadora");
const modoJuegoSelect = document.getElementById("modoJuego");
const ronda = document.getElementById("ronda");

// Agregando eventos a los botones
const piedra = document.getElementById("piedra");
piedra.addEventListener("click", () => jugar("piedra"));
const papel = document.getElementById("papel");
papel.addEventListener("click", () => jugar("papel"));
const tijera = document.getElementById("tijera");
tijera.addEventListener("click", () => jugar("tijera"));

let puntosJugadorTotal = 0;
let puntosComputadoraTotal = 0;
let rondasJugadas = 0;

function reset() {
  rondasJugadas = 0;
  puntosJugadorTotal = 0;
  puntosComputadoraTotal = 0;
  resultado.textContent = "";
  jugada.textContent = "";
  puntosJugador.textContent = "0";
  puntosComputadora.textContent = "0";
  ronda.textContent = "0";
}

reiniciarJuego.addEventListener("click", () => {
  reset();
});

// Agregando evento al selector de modo de juego
modoJuegoSelect.addEventListener("change", () => {
  modoJuego = parseInt(modoJuegoSelect.value);
  reset();
});

function jugar(opcionJugador) {
  const opcionComputadora =
    opciones[Math.floor(Math.random() * opciones.length)];

  switch (opcionJugador + opcionComputadora) {
    case "piedrapiedra":
    case "papelpapel":
    case "tijeratijera":
      resultado.textContent = "¡Empataste la ronda!";
      jugada.textContent = ` ambos escogieron ${opcionJugador}`;
      break;
    case "piedratijera":
    case "papelpiedra":
    case "tijerapapel":
      puntosJugadorTotal++;
      resultado.textContent = "¡Ganaste la ronda!";
      jugada.textContent = `${opcionJugador} gana a ${opcionComputadora}`;
      break;
    default:
      puntosComputadoraTotal++;
      resultado.textContent = "¡Perdiste la ronda!";
      jugada.textContent = `${opcionJugador} pierde contra ${opcionComputadora}`;
  }

  puntosJugador.textContent = puntosJugadorTotal;
  puntosComputadora.textContent = puntosComputadoraTotal;
  rondasJugadas++;
  ronda.textContent = rondasJugadas;

  if (rondasJugadas === parseInt(modoJuegoSelect.value)) {
    if (puntosJugadorTotal > puntosComputadoraTotal) {
      resultado.textContent = "Ganaste el juego, ¡Felicidades!";
      jugada.textContent = "";
    } else if (puntosJugadorTotal < puntosComputadoraTotal) {
      resultado.textContent = "Perdiste el juego, ánimo sigue intentándolo";
      jugada.textContent = "";
    } else {
      resultado.textContent = "Empataron el juego";
      jugada.textContent = "";
    }
  }
}
