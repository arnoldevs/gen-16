// Listar a los pacientes por la especialidad
let radiologia = [
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "IGNACIO SCHULZ",
    paciente: "ANA MARIA GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

let traumatologia = [
  {
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];

let dental = [
  {
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];

// let primerPacienteRadiologia = radiologia[0];
// let ultimoPacienteRadiologia = radiologia[radiologia.length - 1];
// let primerPacienteTraumatologia = traumatologia[0]
// let ultimoPacienteTraumatologia = traumatologia[traumatologia.length - 1]
// let primerPacienteDental = dental[0]
// let ultimoPacienteDental = dental[dental.length - 1]

let [primerPacienteRadiologia, , , , ultimoPacienteRadiologia] = radiologia;
let [primerPacienteTraumatologia, , , , , , ultimoPacienteTraumatologia] =
  traumatologia;
let [primerPacienteDental, , , , , ultimoPacienteDental] = dental;

document.getElementById("estadisticas-pacientes").innerHTML +=
  `<h3>Primera atención Radiología: ${primerPacienteRadiologia.paciente} - ${primerPacienteRadiologia.prevision}</h3>`;
document.getElementById("estadisticas-pacientes").innerHTML +=
  `<h3>Última atención Radiología: ${ultimoPacienteRadiologia.paciente} - ${ultimoPacienteRadiologia.prevision}</h>`;

document.getElementById("estadisticas-pacientes").innerHTML +=
  `<h3>Primera atención Traumatología: ${primerPacienteTraumatologia.paciente} - ${primerPacienteTraumatologia.prevision}</h3>`;
document.getElementById("estadisticas-pacientes").innerHTML +=
  `<h3>Última atención Traumatología: ${ultimoPacienteTraumatologia.paciente} - ${ultimoPacienteTraumatologia.prevision}</h3>`;

document.getElementById("estadisticas-pacientes").innerHTML +=
  `<h3>Primera atención Dental: ${primerPacienteDental.paciente} - ${primerPacienteDental.prevision}</h3>`;
document.getElementById("estadisticas-pacientes").innerHTML +=
  `<h3>Última atención Dental: ${ultimoPacienteDental.paciente} - ${ultimoPacienteDental.prevision}</h3>`;

// Agregar datos de los pacientes a una tabla HTML
function llenarTabla(tablaId, lista) {
  const tabla = document.getElementById(`tabla-${tablaId}`);
  const tbody = tabla.querySelector("tbody");

  lista.forEach((e) => {
    let fila = document.createElement("tr");
    fila.innerHTML = `<td>${e.hora}</td>
    <td>${e.especialista}</td>
    <td>${e.paciente}</td>
    <td>${e.rut}</td>
    <td>${e.prevision}</td>`;
    tbody.appendChild(fila);
  });
}

llenarTabla("radiologia", radiologia);
llenarTabla("traumatologia", traumatologia);
llenarTabla("dental", dental);
