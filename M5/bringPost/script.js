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

    // Crea un elemento de tabla para mostrar los posts en formato tabular
    const table = document.createElement("table");

    // Agrega la tabla al contenedor de posts
    postContainer.appendChild(table);

    // Crea la fila de encabezado de la tabla con las etiquetas "Id", "Título" y "Cuerpo"
    table.innerHTML = `<tr>
            <th>Id</th>
            <th>Título</th>
            <th>Cuerpo</th>
        </tr>`;

    // Recorre cada post en los datos obtenidos de la API
    data.forEach((post) => {
      // Crea una nueva fila en la tabla para cada post
      const row = document.createElement("tr");

      // Establece el contenido de cada celda de la fila con los datos del post correspondiente
      row.innerHTML = `<td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.body}</td>`;

      // Agrega la fila a la tabla
      table.appendChild(row);
    });
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir durante la obtención de los datos
    postContainer.innerHTML = `<h1>Ha ocurrido un error al cargar los datos: ${error}</h1>`;
  }
}
