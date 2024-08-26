const solicitarNumero = () => {
  let numero;
  let salida = true;
  while (salida) {
    numero = parseInt(prompt("Ingrese un número entre 1 y 20:"));
    if (numero < 1 || numero > 20 || isNaN(numero)) {
      console.log(`${numero} está fuera de rango`);
    } else {
      return numero;
    }
  }
};

const numeroValidado = solicitarNumero();
for (let index = 1; index <= numeroValidado; index++) {
  console.log(`${index} x ${numeroValidado} = ${index * numeroValidado}`);
}
for (let i = 1; i <= numeroValidado; i++) {
  let factorial = 1;
  for (let j = 1; j <= i; j++) {
    factorial *= j;
  }
  console.log(`El factorial de ${i} es: ${factorial}`);
}
