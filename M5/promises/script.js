// Función asíncrona para obtener los primeros 20 elementos de una API
const obtenerDetalles = async () => {
	const url = "https://jsonplaceholder.typicode.com/photos";

	// Intentamos realizar la petición a la API
	try {
		const respuesta = await fetch(url);
		const datos = await respuesta.json();
		const primerosVeinte = datos.slice(0, 20);
		// Devuelve una coleccion de objetos
		return primerosVeinte;
	} catch (error) {
		console.error("Error al obtener los detalles ", error);
		// Devuelve una coleccion vacia en caso de error
		return [];
	}
};

const enviarInformacion = async () => {
	return new Promise((resolve) => {
		 // Simulamos una demora de 3 segundos antes de resolver la promesa
		setTimeout(() => {
			resolve("Informacion Enviada");
		}, 3000);
	});
};

const ejecutarPrograma = async () => {
	await obtenerDetalles().then((data) => {
		data.forEach((element) => {
			console.log(`ID: ${element.id}, TITLE: ${element.title}`);
		});
	});
	await enviarInformacion()
		.then((mensaje) => console.log(mensaje))
		.catch((error) => console.log(error));
};

ejecutarPrograma();
