const buttons = document.querySelectorAll("[type=button]");
const caja = document.getElementById("caja");
function cambiarColor(elemento) {
  let color = elemento.style.backgroundColor;
  caja.style.backgroundColor = color;
}
for (const button of buttons) {
  // let color;
  switch (button.id) {
    case "btn-1":
      button.addEventListener("click", () => {
        cambiarColor(button);
      });
      break;
    case "btn-2":
      button.addEventListener("click", () => {
        cambiarColor(button);
      });
      break;
    case "btn-3":
      button.addEventListener("click", () => {
        cambiarColor(button);
      });
      break;
    case "btn-4":
      button.addEventListener("click", () => {
        cambiarColor(button);
      });
      break;
    case "btn-5":
      button.addEventListener("click", () => {
        cambiarColor(button);
      });
      break;
    case "btn-6":
      button.addEventListener("click", () => {
        cambiarColor(button);
      });
      break;
    default:
      console.log("Error al aplicar el color");
      break;
  }
}
