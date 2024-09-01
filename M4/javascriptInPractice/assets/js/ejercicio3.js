const valorInput1 = document.getElementById("valor1");
const valorInput2 = document.getElementById("valor2");
const btnSumar = document.getElementById("btn-sumar");
const btnRestar = document.getElementById("btn-restar");
const resultado = document.querySelector(".resultado");

function sumarValores() {
  const valor1 = parseFloat(valorInput1.value);
  const valor2 = parseFloat(valorInput2.value);
  return (resultado.textContent = valor1 + valor2);
}

function restarValores() {
  const valor1 = parseFloat(valorInput1.value);
  const valor2 = parseFloat(valorInput2.value);
  return (resultado.textContent = Math.max(0, valor1 - valor2));
}

btnSumar.addEventListener("click", sumarValores);
btnRestar.addEventListener("click", restarValores);
