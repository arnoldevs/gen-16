// Función constructora del objeto 'Consultorio', que toma como parámetros el nombre del consultorio y un arreglo de pacientes
function Consultorio(nombreC, pacientes) {
  var _nombreC = nombreC;
  var _pacientes = pacientes || []; // Si no se pasan pacientes, se inicializa como un arreglo vacío.
  // Getter y Setter para el nombre del consultorio
  Object.defineProperty(this, "getNombreC", {
    get: function () {
      return _nombreC;
    },
    set: function (nombreConsultorio) {
      _nombreC = nombreConsultorio;
    },
  });
  // Getter para obtener todos los pacientes del consultorio
  Object.defineProperty(this, "getPacientes", {
    get: function () {
      return _pacientes;
    },
  });
}
// Función para agregar pacientes al consultorio
Consultorio.prototype.agregarPaciente = function (paciente) {
  this.getPacientes.push(paciente);
};
// Método para mostrar todos los pacientes registrados en el consultorio
Consultorio.prototype.mostrarPacientes = function () {
  this.getPacientes.forEach(function (paciente, index) {
    console.log("--------------------------------------");
    console.log("Paciente N° " + (index + 1));
    console.log("Nombre: " + paciente.getNombreP);
    console.log("Edad: " + paciente.getEdadP);
    console.log("Rut: " + paciente.getRutP);
    console.log("Diagnóstico: " + paciente.getDiagnosticoP);
  });
};
// Método para buscar un paciente por nombre
Consultorio.prototype.buscarPacientePorNombre = function (nombrePaciente) {
  var encontrado = false;
  this.getPacientes.forEach(function (paciente) {
    if (paciente.getNombreP === nombrePaciente) {
      console.log("--------------------------------------");
      console.log("Paciente encontrado:");
      console.log("Nombre: " + paciente.getNombreP);
      console.log("Edad: " + paciente.getEdadP);
      console.log("Rut: " + paciente.getRutP);
      console.log("Diagnóstico: " + paciente.getDiagnosticoP);
      encontrado = true;
    }
  });
  if (!encontrado) {
    console.log("Paciente no encontrado");
  }
};
// Función constructora del objeto 'Paciente', que toma como parámetros nombre, edad, rut y diagnóstico
function Paciente(nombreP, edadP, rutP, diagnosticoP) {
  var _nombreP = nombreP;
  var _edadP = edadP;
  var _rutP = rutP;
  var _diagnosticoP = diagnosticoP;
  // Getters y Setters para las propiedades del paciente
  Object.defineProperty(this, "getNombreP", {
    get: function () {
      return _nombreP;
    },
    set: function (nombrePaciente) {
      _nombreP = nombrePaciente;
    },
  });
  Object.defineProperty(this, "getEdadP", {
    get: function () {
      return _edadP;
    },
    set: function (edadPaciente) {
      _edadP = edadPaciente;
    },
  });
  Object.defineProperty(this, "getRutP", {
    get: function () {
      return _rutP;
    },
    set: function (rutPaciente) {
      _rutP = rutPaciente;
    },
  });
  Object.defineProperty(this, "getDiagnosticoP", {
    get: function () {
      return _diagnosticoP;
    },
    set: function (diagnosticoPaciente) {
      _diagnosticoP = diagnosticoPaciente;
    },
  });
}
// Instanciación de algunos objetos Paciente
var p1 = new Paciente("Juan Pérez", 35, "1234567-8", "Problemas respiratorios");
var p2 = new Paciente("Jocelyn García", 30, "8765432-1", "Dolor de espalda");
// Creación de un objeto Consultorio y asignación de los pacientes
var consultorioMiraflores = new Consultorio("Consultorio Miraflores", [p1, p2]);
// Mostrar todos los pacientes del consultorio
consultorioMiraflores.mostrarPacientes();
// Buscar un paciente por nombre
consultorioMiraflores.buscarPacientePorNombre("Jocelyn García");
consultorioMiraflores.buscarPacientePorNombre("Maria Lopez");
// Agregar un nuevo paciente y mostrar los datos actualizados
var p3 = new Paciente("Pedro Sánchez", 45, "9988776-5", "Hipertensión");
consultorioMiraflores.agregarPaciente(p3);
consultorioMiraflores.mostrarPacientes();
