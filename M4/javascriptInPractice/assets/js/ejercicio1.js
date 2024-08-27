const nombreCompleto = document.getElementById("nombre").value;
const errorNombre = document.getElementsByClassName("errorNombre");
const formulario = document.getElementById("formulario");

let regex = /^[a-zA-Z\s]+$/;
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!regex.test(nombreCompleto)) console.log("El nombre es requerido");
});
