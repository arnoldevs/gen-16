import Cliente from "./Cliente.js";
import Impuesto from "./Impuesto.js";

let c1 = new Cliente("Juan Pérez", new Impuesto(2020212, 1321));
console.log(c1.calcularImpuesto());
