import { Animal } from "./Animal.js";
import { Leon } from "./Leon.js";
import { Lobo } from "./Lobo.js";
import { Oso } from "./Oso.js";
import { Serpiente } from "./Serpiente.js";
import { Aguila } from "./Aguila.js";

// Seleccionamos los elementos del DOM que vamos a utilizar
const tabla = document.querySelector("#tabla");
const animalesDiv = document.querySelector("#animales");
const animalesSelect = document.querySelector("#animal");
const edadSelect = document.querySelector("#edad");
const comentariosTextArea = document.querySelector("#comentarios");
const btnRegistrar = document.querySelector("#btnRegistrar");
const audio = document.querySelector("#player");
const preview = document.querySelector("#preview");
const modal = document.querySelector("#exampleModal");

// Módulo para obtener las imágenes de los animales desde un archivo JSON
const animalModule = (() => {
	// Función asíncrona para obtener las imágenes
	const obtenerImagenes = async () => {
		try {
			const response = await fetch("animales.json");
			const data = await response.json();
			const animalesMap = new Map();
			data.animales.forEach((animal) => {
				animalesMap.set(animal.name, animal.imagen);
			});
			return animalesMap;
		} catch (error) {
			console.error("Error al obtener los animales:", error);
			return new Map();
		}
	};

	// Exportamos las funciones que queremos hacer públicas
	return {
		obtenerImagenes,
	};
})();

// colecciones creadas para almacenar los animales y los registrados
let animales;
let animalesRegistrados = [];

// Usando las funciones exportadas
// Obtenemos las imágenes de los animales y las almacenamos en el arreglo 'animales'
animalModule
	.obtenerImagenes()
	.then((a) => {
		animales = a;
	})
	.catch((error) => {
		console.error("Error:", error);
	});

// Evento para actualizar la vista previa cuando se selecciona un animal
animalesSelect.addEventListener("change", () => {
	const nombre = animalesSelect.value;
	const imagen = animales.get(nombre);
	if (imagen) {
		// codigo usado para hacer que las imagenes se muestren en la vista previa de manera correcta
		// encajando en el contenedor.
		preview.innerHTML = "";
		preview.classList.remove("default-preview");
		const img = document.createElement("img");
		img.classList.add("card-img", "img-fluid", "border", "rounded");
		img.setAttribute("src", `assets/imgs/${imagen}`);
		preview.appendChild(img);
	} else {
		// Manejar el caso en que la imagen no se encuentra
		preview.innerHTML = "Imagen no encontrada";
		preview.classList.add("default-preview");
	}
});

// Evento para registrar un nuevo animal
btnRegistrar.addEventListener("click", registrarAnimal);

// Función para reiniciar o limpiar el formulario después de registrar un animal
let reiniciarFormulario = () => {
	animalesSelect.selectedIndex = 0;
	edadSelect.selectedIndex = 0;
	comentarios.value = "";
	preview.innerHTML = "";
	preview.classList.add("default-preview");
};

// Crear un mapa para relacionar nombres de animales con clases
const clasesAnimales = {
	Leon: Leon,
	Lobo: Lobo,
	Oso: Oso,
	Serpiente: Serpiente,
	Aguila: Aguila,
};

// Función para crear un nuevo objeto de animal
function crearAnimal(nombre, edad, imagen, comentarios, sonido) {
	const claseAnimal = clasesAnimales[nombre]; // Obtener la clase correspondiente
	if (!claseAnimal) {
		alert("El animal no existe");
		return 1;
	}
	// Validacion basica de posible SQL injection
	const regex = /[\(\)\'\"\;\?\%\*\+\-\/\\\]\[]/;
	if (regex.test(comentarios)) {
		alert("Por favor no ingrese caracteres inválidos");
		return 1;
	}
	return new claseAnimal(nombre, edad, imagen, comentarios, sonido);
}

function registrarAnimal() {
	const nombre = animalesSelect.value;
	const edad = edadSelect.value;
	const comentarios = comentariosTextArea.value;

	const imagen = animales.get(nombre);
	const sonido = animalesSelect.value + ".mp3";

	const regex = /Seleccione/
	if (regex.test(nombre) || regex.test(edad) || !comentarios) {
		alert("Por favor, rellene todos los campos");
		return 1;
	}

	const nuevoAnimal = crearAnimal(nombre, edad, imagen, comentarios, sonido);

	if (!nuevoAnimal || nuevoAnimal != 1) {
		animalesRegistrados.push(nuevoAnimal);
		reiniciarFormulario();
		mostrarAnimales();
	}
}

// Mostrar los animales registrados en la tabla de animales como cards
let mostrarAnimales = () => {
	// Limpiar el contenedor antes de agregar nuevas tarjetas
	animalesDiv.innerHTML = "";
	animalesRegistrados.forEach((animal) => {
		const card = document.createElement("div");
		animalesDiv.classList.add("gap-3");
		card.classList.add(
			"card",
			"col-12",
			"col-sm-6",
			"col-md-4",
			"text-center",
			"p-2",
			"bg-warning",
			"shadow-lg",
			"animal-card"
		);
		// Agregar los atributos a la card para que se muestre el modal
		card.setAttribute("data-bs-toggle", "modal");
		card.setAttribute("data-bs-target", "#exampleModal");
		card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title animal-card-title">${animal.nombre}</h5>
        <hr />

          <img src="assets/imgs/${animal.imagen}" class="img-fluid" alt="${animal.nombre}">
					<hr>
					<p class="card-subtitle">Haz click para mas detalles</p>
      </div>
    `;
		animalesDiv.appendChild(card);
	});
	if (animalesDiv) {
		// Se usa la delegacion de eventos para manejar dinamicamente los elementos y optimizar el rendimiento del codigo
		animalesDiv.addEventListener("click", (event) => {
			// Obtener la tarjeta que fue clickeada
			// busca el ancestro más cercano del elemento objetivo
			const clickedCard = event.target.closest(".animal-card");
			// Se comprueba que solo se ejecute el código si se ha hecho clic en una tarjeta
			if (clickedCard) {
				// Extraer el nombre del animal del título de la tarjeta
				const animalName =
					clickedCard.querySelector(".animal-card-title").textContent;

				// Buscar el animal en el arreglo
				const animalIndex = animalesRegistrados.findIndex(
					(animal) => animal.nombre === animalName
				);

				// Acceder al objeto del animal
				const animal = animalesRegistrados[animalIndex];

				// Mostrar información detallada en la consola (por ejemplo)
				mostrarModal(animal);
			}
		});
	} else {
		console.log("No se ha encontrado el elemento");
	}
};

let mostrarModal = (animal) => {
	// Este elemento será el contenedor del contenido del modal.
	modal.querySelector(".modal-body").innerHTML = `
    <img src="assets/imgs/${animal.imagen}" class="img-fluid" alt="${animal.nombre}">
    <hr>
    <h2 class="fs-5">${animal.edad}</h2>
    <hr>
    <h2 class="fs-5">Comentarios</h2>
    <p>${animal.comentarios}</p>
		<hr>
		<button type="button" class="btn btn-primary animal-sound">Reproducir sonido</button>
  `;
	playSound(animal);
};

// Funcionalidad de sonido no implementada, se encuentra incompleta
let playSound = (animal) => {
	const btnModal = document.querySelector(".animal-sound");
	btnModal.addEventListener("click", () => {
		// No use el atributo controls las etiqueta HTML audio. Solo realice un uso basico y simple.
    audio.src = `assets/sounds/Rugido.mp3`;
    // Reproduce el sonido
    audio.play();
	})

	
};