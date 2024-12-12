<template>
	<div>
		<h2>Bienvenidos al Home !</h2>
		<!-- Título de la vista principal (Home) -->
		<p>Vista sólo para Usuarios Logueados!</p>
		<!-- Mensaje indicando que la vista es solo para usuarios autenticados -->
		<button @click="logout">Salir</button>
		<!-- Botón para cerrar sesión -->
	</div>
</template>

<script>
import { signOut } from "firebase/auth"; // Importar la función para cerrar sesión de Firebase Authentication
import { auth } from "../firebaseConfig"; // Importar la instancia de autenticación de Firebase

export default {
	methods: {
		// Método para cerrar sesión del usuario
		async logout() {
			try {
				await signOut(auth); // Cerrar sesión utilizando Firebase Authentication
				this.$router.push("/login"); // Redirigir al usuario a la vista de login después de cerrar sesión
			} catch (error) {
				console.error(error); // Manejar y mostrar errores en la consola
			}
		},
	},
};
</script>
