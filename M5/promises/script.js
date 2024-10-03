const obtenerDetalles = async () => {
	const url = "https://jsonplaceholder.typicode.com/photos";

	try {
		const respuesta = await fetch(url);
		const datos = await respuesta.json();
		const primerosVeinte = datos.slice(0, 20);
		primerosVeinte.forEach((e) => {
			console.log(`El título de la película es: ${e.title}`);
		});
	} catch (error) {
		console.error("Error al obtener los detalles ", error);
	}
};

obtenerDetalles();

const tiempoEspera = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Información enviada");
	}, 3000);
});

tiempoEspera
	.then((mensaje) => console.log(mensaje))
	.catch((error) => console.log(error));

// DESAFIO GUIADO
const obtenerAlbum = async () => {
	const url = "https://jsonplaceholder.typicode.com/photos";

	try {
		const response = await fetch(url);
		const data = await response.json();
		data.slice(0, 20).forEach((element) => {
			console.log(`id: ${element.id}, title: ${element.title}`);
		});
	} catch (error) {
		console.log(error);
	}
};

const enviarInformacion = async () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Informacion Enviada");
		}, 3000);
	});
};

const mostrarMensaje = async () => {
	const informacion = await enviarInformacion();
	console.log(informacion);
};

/* mostrarMensaje(obtenerAlbum()); */

const ejecutarPrograma = async () => {
	await obtenerAlbum();
	await mostrarMensaje();
};

ejecutarPrograma();
