// Metodo creado para reiniciar los valores y alertas del formulario
function resetForm(operation) {
  let myForm = operation + "Form";
  let container = operation + "AlertContainer";
  let result = operation + "ResultContainer";
  document.getElementById(myForm).reset();
  document.getElementById(result).classList.add("d-none");
  document.getElementById(container).classList.add("d-none");
}

function arithmeticOperations(event) {
  event.preventDefault();
  // Obtener los valores del formulario
  const arithmeticForm = document.getElementById("arithmeticForm");
  const num1 = parseFloat(arithmeticForm.inputNumber1.value);
  const num2 = parseFloat(arithmeticForm.inputNumber2.value);
  const alertContainer = document.getElementById("arithmeticAlertContainer");
  const errorMessage = document.getElementById("arithmeticErrorMessage");

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
  const resultElement = document.getElementById("arithmeticResult");
  document
    .getElementById("arithmeticResultContainer")
    .classList.remove("d-none");
  resultElement.textContent = result;
}

function averageOperations(event) {
  event.preventDefault();
  // Obtener los números del formulario y agregarlos a un array
  let digits = [];
  const averageForm = document.getElementById("averageForm");
  digits.push(parseFloat(averageForm.inputDigit1.value));
  digits.push(parseFloat(averageForm.inputDigit2.value));
  digits.push(parseFloat(averageForm.inputDigit3.value));
  digits.push(parseFloat(averageForm.inputDigit4.value));
  digits.push(parseFloat(averageForm.inputDigit5.value));

  const alertContainer = document.getElementById("averageAlertContainer");
  const errorMessage = document.getElementById("averageErrorMessage");

  // Validación de los números
  let allNumbers = digits.every((element) => !isNaN(element));
  if (!allNumbers) {
    errorMessage.textContent = "Por favor, ingresa solo números.";
    alertContainer.classList.remove("d-none");
    return;
  } else {
    alertContainer.classList.add("d-none");
  }

  let zero = digits.some((num) => num === 0);

  if (zero) {
    errorMessage.textContent = "Los números deben ser mayores que 0.";
    alertContainer.classList.remove("d-none");
    return;
  } else {
    alertContainer.classList.add("d-none");
  }

  // Calculando el promedio
  let average = digits.reduce((sum, num) => sum + num, 0) / digits.length;
  let sum = 0;
  digits.forEach((num) => {
    sum += num;
  });

  // Obtener el valor seleccionado(suma, promedio)
  const radioChecked = document.querySelector(
    'input[type="radio"]:checked',
  ).value;

  let result;
  // Realizar la operación según la selección
  switch (radioChecked) {
    case "sum":
      result = sum;
      break;
    case "average":
      result = average;
      break;
    default:
      result = "Operación inválida";
  }

  // Mostrar el resultado
  const resultElement = document.getElementById("averageResult");
  document.getElementById("averageResultContainer").classList.remove("d-none");
  resultElement.textContent = result;
}

function temperaturesOperations(event) {
  event.preventDefault();
  // Obtener los valores del formulario
  const temperatureForm = document.getElementById("temperatureForm");
  const celsius = parseFloat(temperatureForm.inputCelsius.value);
  const alertContainer = document.getElementById("temperatureAlertContainer");
  const errorMessage = document.getElementById("temperatureErrorMessage");

  // Validación de los números
  if (isNaN(celsius)) {
    errorMessage.textContent = "Por favor, ingresa solo números.";
    alertContainer.classList.remove("d-none");
    return;
  } else {
    alertContainer.classList.add("d-none");
  }

  const KV = 273.15;
  let kelvin = celsius + KV;
  let fahrenheit = (celsius * 9) / 5 + 32;

  // Capturar opciones
  const operation = document.querySelector(
    ".temperatureCheckBox:checked",
  ).value;

  // Mostrar el resultado
  let result =
    operation === "kelvin"
      ? kelvin
      : operation === "fahrenheit"
        ? fahrenheit
        : "Error";

  const resultElement = document.getElementById("temperatureResult");
  document
    .getElementById("temperatureResultContainer")
    .classList.remove("d-none");
  resultElement.textContent = result;
}

function calendarOperations(event) {
  event.preventDefault();

  // Obtener los valores del formulario
  const calendarForm = document.getElementById("calendarForm");
  const totalDays = parseFloat(calendarForm.inputDays.value);
  const alertContainer = document.getElementById("calendarAlertContainer");
  const errorMessage = document.getElementById("calendarErrorMessage");

  // Validación de los números
  if (isNaN(totalDays)) {
    errorMessage.textContent = "Por favor, ingresa solo números.";
    alertContainer.classList.remove("d-none");
    return;
  } else {
    alertContainer.classList.add("d-none");
  }

  let years = Math.floor(totalDays / 365);
  let week = Math.floor((totalDays % 365) / 7);
  let day = (totalDays % 365) % 7;

  // Mostrar resultado completo
  let result = `Equivalen a ${years} año(s) | ${week} semana(s) | ${day} día(s)`;
  const resultElement = document.getElementById("calendarResult");
  document.getElementById("calendarResultContainer").classList.remove("d-none");
  resultElement.textContent = result;
}
