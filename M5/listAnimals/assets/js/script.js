class Propietario {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }
  datosPropietario() {
    return `Nombre del propietario:${this.nombre} Dirección:${this.direccion} Teléfono:${this.telefono}`;
  }
}
class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this._tipo = tipo;
  }
  get tipo() {
    return `EEl tipo de animal es un: ${this._tipo}`;
  }
}

class Mascota extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombreAnimal, enfermedad) {
    super(nombre, direccion, telefono, tipo);
    this._nombreAnimal = nombreAnimal;
    this._enfermedad = enfermedad;
  }
  get nombreAnimal() {
    return this._nombreAnimal;
  }
  set nombreAnimal(nombre) {
    this._nombreAnimal = nombre;
  }

  get enfermedad() {
    return this._enfermedad;
  }
  set enfermedad(enfermedad) {
    this._enfermedad = enfermedad;
  }
}
let formulario = document.querySelector("form");
let agregando = (event) => {
  event.preventDefault();
  let propietario = document.getElementById("propietario").value;
  let nombreMascota = document.getElementById("nombreMascota").value;
  let direccion = document.getElementById("direccion").value;
  let enfermedad = document.getElementById("enfermedad").value;
  let telefono = document.getElementById("telefono").value;
  let tipo = document.getElementById("tipo").value;

  switch (tipo) {
    case "perro":
      let perro = new Mascota(
        propietario,
        direccion,
        telefono,
        tipo,
        nombreMascota,
        enfermedad,
      );
      mostrarResultado(perro);
      break;
    case "gato":
      let gato = new Mascota(
        propietario,
        direccion,
        telefono,
        tipo,
        nombreMascota,
        enfermedad,
      );
      mostrarResultado(gato);
      break;
    case "conejo":
      let conejo = new Mascota(
        propietario,
        direccion,
        telefono,
        tipo,
        nombreMascota,
        enfermedad,
      );
      mostrarResultado(conejo);
      break;

    default:
      break;
  }
};

let mostrarResultado = (valor) => {
  let resultado = document.querySelector("#resultado ul");
  resultado.innerHTML = "";
  let li1 = document.createElement("li");
  li1.innerHTML = `${valor.datosPropietario()}`;
  let li2 = document.createElement("li");
  li2.innerHTML = `${valor.tipo}, mientras que el nombre de la mascota es: ${valor.nombreAnimal} y la enfermedad es: ${valor.enfermedad}`;
  resultado.appendChild(li1);
  resultado.appendChild(li2);
};

formulario.addEventListener("submit", agregando);
