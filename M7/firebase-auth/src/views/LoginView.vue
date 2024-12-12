<template>
	<div>
		<h2>Login / Iniciar Sesión</h2>
		<!-- Título de la vista de inicio de sesión -->
		<form @submit.prevent="login">
			<!-- Formulario para iniciar sesión, previene la recarga de página por defecto -->
			<input type="email" v-model="email" placeholder="Email" required />
			<!-- Campo de entrada para el email, enlazado a la variable 'email' -->
			<input
				type="password"
				v-model="password"
				placeholder="Password"
				required
			/>
			<!-- Campo de entrada para la contraseña, enlazado a la variable 'password' -->
			<button type="submit">Iniciar Sesión</button>
			<!-- Botón para enviar el formulario y ejecutar el método de inicio de sesión -->
		</form>
	</div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth"; // Importar la función para iniciar sesión con email y contraseña
import { auth } from "../firebaseConfig"; // Importar la instancia de autenticación de Firebase

export default {
	data() {
		return {
			email: "", // Variable para almacenar el email del usuario
			password: "", // Variable para almacenar la contraseña del usuario
		};
	},
	methods: {
		// Método para iniciar sesión del usuario
		async login() {
			try {
				await signInWithEmailAndPassword(auth, this.email, this.password); // Iniciar sesión con email y contraseña usando Firebase Authentication
				this.$router.push("/"); // Redirigir al usuario a la vista principal (Home) después de iniciar sesión
			} catch (error) {
				console.error(error.message); // Manejar y mostrar errores en la consola
			}
		},
	},
};
</script>
