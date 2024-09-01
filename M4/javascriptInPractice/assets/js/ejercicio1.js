const formulario = document.getElementById("formulario");
//Obteniendo inputs del formulario
const nombre = document.getElementById("nombre");
const asunto = formulario.asunto;
const mensaje = formulario.mensaje;
// Obteniendo cajas de mensajes
const resultado = document.querySelector(".resultado");
const errorNombre = document.querySelector(".errorNombre");
const errorAsunto = document.querySelector(".errorAsunto");
const errorMensaje = document.querySelector(".errorMensaje");

let regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s]+$/;

// Validacion basica
function validacion(elemento, errorElemento) {
  let estado = true;
  if (!regex.test(elemento.value)) {
    errorElemento.textContent = `El ${elemento.id} es requerido`;
    estado = false;
  }
  if (/\d/.test(elemento.value)) {
    errorElemento.textContent = `El ${elemento.id} solo puede contener valores alfabéticos`;
    estado = false;
  }
  if (estado) {
    errorElemento.textContent = "";
  }
  return estado;
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  validacion(nombre, errorNombre);
  validacion(asunto, errorAsunto);
  validacion(mensaje, errorMensaje);
  if (
    validacion(nombre, errorNombre) &&
    validacion(asunto, errorAsunto) &&
    validacion(mensaje, errorMensaje)
  ) {
    resultado.textContent = "Mensaje enviado con éxito !!!";
  }
});
