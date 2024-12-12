<template>
	<div id="app">
		<nav>
			<ul>
				<!-- Enlace a la vista de registro, solo visible si el usuario no está autenticado -->
				<li v-if="!user"><router-link to="/signup">Sign Up</router-link></li>
				<!-- Enlace a la vista de inicio de sesión, solo visible si el usuario no está autenticado -->
				<li v-if="!user"><router-link to="/login">Login</router-link></li>
				<!-- Enlace a la vista principal (Home), solo visible si el usuario está autenticado -->
				<li v-if="user"><router-link to="/">Home</router-link></li>
				<!-- Enlace para cerrar sesión, solo visible si el usuario está autenticado -->
				<li v-if="user" @click="logout"><a href="#">Logout</a></li>
			</ul>
		</nav>
		<!-- Renderizar la vista correspondiente según la ruta seleccionada -->
		<router-view></router-view>
	</div>
</template>

<script>
import { onAuthStateChanged, signOut } from "firebase/auth"; // Importar funciones necesarias para autenticación de Firebase
import { auth } from "./firebaseConfig"; // Importar la instancia de autenticación de Firebase
import router from "./router"; // Importar el router configurado para la navegación

export default {
	name: "App", // Nombre del componente principal
	data() {
		return {
			user: null, // Variable para almacenar el estado del usuario autenticado
		};
	},
	created() {
		// Monitorear cambios en la autenticación del usuario
		onAuthStateChanged(auth, (user) => {
			this.user = user; // Actualizar la variable 'user' cuando cambia el estado de autenticación
		});
	},
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
