<template>
	<div class="pokemon-card">
		<!-- Imagen del Pokémon; aplica el filtro si no ha sido descubierto -->
		<img
			:src="pokemon.sprite"
			:class="{ 'no-filter': discovered }"
			alt="pokemon image"
		/>

		<!-- Input para que el usuario ingrese el nombre del Pokémon; sólo se muestra si no ha sido descubierto -->
		<input v-if="!discovered" v-model="guess" @keyup.enter="checkGuess" />

		<!-- Botón para verificar el nombre; solo visible si el Pokémon no ha sido descubierto -->
		<button class="discover-button" v-if="!discovered" @click="checkGuess">
			Descubrir
		</button>

		<!-- Nombre del Pokémon; sólo se muestra si ha sido descubierto -->
		<p class="pokemon-name" v-else>{{ pokemon.name }}</p>
		<notification v-if="showNotification" :message="notificationMessage" />
	</div>
</template>

<script>
// Importar el componente de notificación
import Notification from "./Notification.vue";
export default {
	props: ["pokemon"],
	data() {
		return {
			guess: "", // Nombre ingresado por el usuario
			discovered: false, // Estado que indica si el Pokémon ha sido descubierto
			showNotification: false,
			notificationMessage: "",
		};
	},
	methods: {
		// Verifica si el nombre ingresado es correcto; si no, muestra una alerta
		checkGuess() {
			// Convierte ambos nombres a minúsculas para hacer una comparación insensible a mayúsculas/minúsculas
			if (this.guess.toLowerCase() === this.pokemon.name.toLowerCase()) {
				this.discovered = true; // Marca el Pokémon como descubierto
				this.$emit("pokemonDiscovered"); // Emite un evento al componente padre para incrementar el contador
			} else {
				// Muestra una alerta si el nombre es incorrecto
				// alert("Nombre incorrecto. ¡Inténtalo de nuevo!");
				this.guess = ""; // Limpia el campo de entrada
				this.showNotification = true;
				this.notificationMessage = "Nombre incorrecto. ¡Inténtalo de nuevo!";
				setTimeout(() => {
					this.showNotification = false;
				}, 3000); // Después de 3 segundos, limpia la notificación
			}
		},
	},
	components: {
		Notification,
	},
};
</script>

<style scoped>
.pokemon-card {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

/* Filtro borroso aplicado a la imagen */
img {
	width: 12.5rem;
	filter: blur(5px) grayscale(100%);
	transition: filter 0.3s ease; /* Transición suave para eliminar el filtro */
}

/* Remueve el filtro cuando el Pokémon es descubierto */
img.no-filter {
	filter: none;
}

input {
	padding: 0.5rem;
	text-align: center;
	font-size: 1rem;
}
.discover-button {
	width: 100%;
	margin: 1rem;
	padding: 0.5rem;
	background-color: #c39e08;
	color: white;
	border: none;
	cursor: pointer;
	font-size: 1rem;
	transition: background-color 0.3s ease; /* Transición suave para el botón */
}
.discover-button:hover {
	background-color: #967f00;
}
.pokemon-name {
	font-size: 2rem;
	font-family: "Rubik Bubbles", system-ui;
	text-transform: capitalize;
	color: #c39e08;
}
</style>
