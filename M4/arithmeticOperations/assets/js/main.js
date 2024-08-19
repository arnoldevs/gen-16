function arithmeticOperations(event) {
  event.preventDefault();
  // Obtener los valores del formulario
  const numberForm = document.getElementById("numberForm");
  const num1 = parseFloat(numberForm.inputNumber1.value);
  const num2 = parseFloat(numberForm.inputNumber2.value);
  const alertContainer = document.getElementById("alertContainer");
  const errorMessage = document.getElementById("errorMessage");

  // Validación de los números
  if (isNaN(num1) || isNaN(num2)) {
    errorMessage.textContent = "Por favor, ingresa solo números.";
    alertContainer.classList.remove("d-none");
    return;
  } else {
    alertContainer.classList.add("d-none");
  }

  if (num1 <= 0 || num2 <= 0) {
    errorMessage.textContent = "Los números deben ser mayores que 0.";
    alertContainer.classList.remove("d-none");
    return;
  } else {
    alertContainer.classList.add("d-none");
  }

  if (num1 === num2) {
    // document.getElementById("inputNumber1").classList.add("is-invalid");
    // document.getElementById("inputNumber2").classList.add("is-invalid");

    // Mostrar la alerta
    errorMessage.textContent = "Los números deben ser diferentes.";
    alertContainer.classList.remove("d-none");
    return;
  } else {
    // ... (remover clases y ocultar la alerta si los números son diferentes)
    alertContainer.classList.add("d-none");
    document.getElementById("inputNumber1").classList.remove("is-invalid");
    document.getElementById("inputNumber2").classList.remove("is-invalid");
  }

  // Obtener el valor seleccionado(suma, resta, multiplicacion, division, modulo)
  const operation = document.querySelector("select").value;

  let result;
  // Realizar la operación según la selección
  switch (operation) {
    case "additionOpt":
      result = num1 + num2;
      break;
    case "subtractionOpt":
      result = num1 - num2;
      break;
    case "multiplicationOpt":
      result = num1 * num2;
      break;
    case "divisionOpt":
      if (num2 === 0) {
        result = "No se puede dividir por cero";
      } else {
        result = num1 / num2;
      }
      break;
    case "moduleOpt":
      result = num1 % num2;
      break;
    default:
      result = "Operación inválida";
  }

  // Mostrar el resultado
  const resultElement = document.getElementById("result");
  document.getElementById("resultContainer").classList.remove("d-none");
  resultElement.textContent = result;
}

// Metodo creado para reiniciar los valores y alertas del formulario
function resetForm() {
  numberForm.reset();
  document.getElementById("resultContainer").classList.add("d-none");
  alertContainer.classList.add("d-none");
}
