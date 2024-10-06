// Selecciona el elemento con el ID "post-data" donde se mostrarán los posts
const postContainer = document.getElementById("post-data");

// Función asíncrona para obtener los datos de los posts
async function getPosts() {
	// Define la URL del endpoint de la API que contiene los datos de los posts
	const url = "https://jsonplaceholder.typicode.com/posts";

	try {
		// Realiza una petición a la API para obtener los datos
		const response = await fetch(url);

		// Convierte la respuesta de la API a formato JSON (un objeto JavaScript)
		const data = await response.json();

		// Solo para efectos de seguir con los requerimientos muestro los datos en una lista.
		// Inicialmente mostraba los resultados en una tabla.
		mostrarLista(data, postContainer);

		// mostrarTabla(data, postContainer)
	} catch (error) {
		// Maneja cualquier error que pueda ocurrir durante la obtención de los datos
		postContainer.innerHTML = `<h1>Ha ocurrido un error al cargar los datos: ${error}</h1>`;
	}
}

const mostrarLista = (data, container) => {
	// Crea una lista desordenada para mostrar los posts
	const list = document.createElement("ul");

	// Recorre cada post en los datos obtenidos de la API
	data.forEach((post) => {
		// Crea un nuevo elemento de lista para cada post
		const item = document.createElement("li");

		// Establece el contenido del elemento de lista con los datos del post
		item.innerHTML = `<p><strong>${post.title}</strong></p>
        <p>${post.body}</p>`;

		// Agrega el elemento de lista a la lista principal
		list.appendChild(item);
	});

	// Agrega la lista al contenedor de posts
	container.appendChild(list);
};

const mostrarTabla = (data, container) => {
	const table = document.createElement("table");

	container.appendChild(table);

	table.innerHTML = `
        <tr>
            <th>Id Usuario</th>
            <th>Id</th>
            <th>Título</th>
            <th>Cuerpo</th>
        </tr>`;

	data.forEach((post) => {
		const row = document.createElement("tr");

		row.innerHTML = `
                <td>${post.userId}</td>
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.body}</td>`;

		table.appendChild(row);
	});
};
