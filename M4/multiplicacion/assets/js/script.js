const solicitarNumero = () => {
  let numero;
  while (true) {
    numero = parseInt(prompt("Ingrese un número entre 1 y 20:"));
    if (numero < 1 || numero > 20 || isNaN(numero)) {
      console.log(`${numero} está fuera de rango`);
    } else {
      return numero;
    }
  }
};

const numeroValido = solicitarNumero();
for (let index = 0; index <= numeroValido; index++) {
  console.log(`${index} x ${numeroValido} = ${index * numeroValido}`);
}
for (let index = 1; index <= numeroValido; index++) {
  let res = 1;
  for (let i = index; i <= index; i++) {
    res = res * i;
  }
  console.log(index + res);
}
// console.log(`El número ingresado es: ${numeroValido}`);
