<template>
	<div>
		<h2>Sign Up / Registrarse</h2>
		<!-- Título de la vista de registro de usuarios -->
		<form @submit.prevent="signUp">
			<!-- Formulario para registro de usuarios, previene la recarga de página por defecto -->
			<input type="email" v-model="email" placeholder="Email" required />
			<!-- Campo de entrada para el email, enlazado a la variable 'email' -->
			<input
				type="password"
				v-model="password"
				placeholder="Password"
				required
			/>
			<!-- Campo de entrada para la contraseña, enlazado a la variable 'password' -->
			<button type="submit">Registrarse</button>
			<!-- Botón para enviar el formulario y ejecutar el método de registro -->
		</form>
	</div>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth"; // Importar la función para crear un nuevo usuario con email y contraseña
import { auth } from "../firebaseConfig"; // Importar la instancia de autenticación de Firebase

export default {
	data() {
		return {
			email: "", // Variable para almacenar el email del usuario
			password: "", // Variable para almacenar la contraseña del usuario
		};
	},
	methods: {
		// Método para registrar un nuevo usuario
		async signUp() {
			try {
				await createUserWithEmailAndPassword(auth, this.email, this.password); // Crear un nuevo usuario con email y contraseña usando Firebase Authentication
				this.$router.push("/"); // Redirigir al usuario a la vista principal (Home) después de registrarse
			} catch (error) {
				console.error(error.message); // Manejar y mostrar errores en la consola
			}
		},
	},
};
</script>
