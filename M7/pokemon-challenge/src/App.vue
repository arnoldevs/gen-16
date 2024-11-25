<template>
	<header>
		<!-- Título principal de la aplicación -->
		<img src="/pokemon-logo.png" alt="pokemon logo" />
		<h1>¿Quién es ese Pokémon?</h1>

		<!-- Contador de Pokémon descubiertos de un total de 20 -->
		<h3>
			Pokemones descubiertos:
			<span class="counter">{{ discoveredCount }}</span>
		</h3>
	</header>

	<!-- Mensaje de felicitación, visible solo si todos los Pokémon han sido descubiertos -->
	<p class="congratulations" v-if="allDiscovered">
		¡Felicidades! eres un maestro Pokémon.
	</p>

	<!-- Contenedor de Pokémon usando CSS Grid para organizarlos en filas-->
	<div class="pokemon-container">
		<!-- Renderiza el componente PokemonCard para cada Pokémon en el array 'pokemons' -->
		<PokemonCard
			v-for="(pokemon, index) in pokemons"
			:key="index"
			:pokemon="pokemon"
			@pokemonDiscovered="incrementCounter"
		/>
	</div>
</template>

<script>
// Importa Axios para realizar solicitudes HTTP y el componente hijo PokemonCard
import axios from "axios";
import PokemonCard from "./components/PokemonCard.vue";

export default {
	components: {
		// Componente hijo
		PokemonCard,
	},
	data() {
		return {
			pokemons: [], // Array que almacenará los datos de los 20 Pokémon obtenidos de la API
			discoveredCount: 0, // Contador de Pokémon descubiertos, inicialmente en 0
		};
	},
	computed: {
		// Computed property que retorna true si todos los Pokémon han sido descubiertos
		allDiscovered() {
			return this.discoveredCount === 20;
		},
	},
	methods: {
		// Método para obtener la lista de 20 Pokémon y sus detalles desde la API de PokeAPI
		async fetchPokemons() {
			try {
				// Solicitud a la API para obtener un arreglo con los primeros 20 Pokémons
				const response = await axios.get("https://pokeapi.co/api/v2/pokemon");

				// Crea una lista de promesas para obtener los datos detallados de cada Pokémon utilizando su URL
				const pokemonPromises = response.data.results.map(
					(pokemon) => axios.get(pokemon.url), // Realiza una solicitud para cada URL en el arreglo 'results'
				);

				// Espera a que todas las promesas se resuelvan y obtiene un arreglo con los datos de cada Pokémon
				const pokemonData = await Promise.all(pokemonPromises);

				// Mapea el arreglo de datos para extraer solo el nombre y la URL de la imagen de cada Pokémon
				this.pokemons = pokemonData.map((res) => ({
					name: res.data.name, // Nombre del Pokémon
					sprite: res.data.sprites.front_default, // URL de la imagen del Pokémon
				}));
			} catch (error) {
				// Muestra si hay un error al obtener los Pokémon
				alert("Error al obtener los Pokémon:", error);
			}
		},
		// Método que incrementa el contador de Pokémon descubiertos
		incrementCounter() {
			this.discoveredCount += 1;
		},
	},
	mounted() {
		this.fetchPokemons();
	},
};
</script>

<style>
header {
	margin-top: 5rem;
}
/* Estilos de la grilla de Pokémon */
.pokemon-container {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	/* Espacio entre las tarjetas */
	gap: 2rem;
	/* Centra las tarjetas en cada celda */
	justify-items: center;
}
header img {
	width: 18.75rem;
}
.counter {
	color: #c39e08;
}
.congratulations {
	font-size: 3rem;
	font-weight: 800;
	color: #c39e08;
	text-shadow: 2px 2px 0 #3b5ba4, /* Sombra exterior azul */ -2px -2px 0 #3b5ba4,
		2px -2px 0 #3b5ba4, -2px 2px 0 #3b5ba4, 1px 1px 2px rgba(0, 0, 0, 0.5); /* Sombra interior para profundidad */
	letter-spacing: 2px; /* Ajusta el espaciado entre letras */
	animation: bounce-in 0.5s ease-in-out;
}
@keyframes bounce-in {
	from {
		transform: translateY(50px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}
</style>
