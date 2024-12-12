// Importamos las funciones necesarias de Vue Router y Firebase
import { createRouter, createWebHistory } from "vue-router"; // Para crear el router con historial del navegador
import { auth } from "../firebaseConfig"; // Importamos la instancia de autenticación de Firebase
import SignUp from "../views/SignUpView.vue"; // Importamos la vista de registro de usuarios
import Login from "../views/LoginView.vue"; // Importamos la vista de inicio de sesión
import Home from "../views/HomeView.vue"; // Importamos la vista de la página principal

// Definimos las rutas de la aplicación
const routes = [
	{
		path: "/signup", // Ruta para la vista de registro
		name: "SignUp",
		component: SignUp, // Componente a renderizar cuando se visita esta ruta
	},
	{
		path: "/login", // Ruta para la vista de inicio de sesión
		name: "Login",
		component: Login, // Componente a renderizar cuando se visita esta ruta
	},
	{
		path: "/", // Ruta para la vista principal (Home)
		name: "Home",
		component: Home, // Componente a renderizar cuando se visita esta ruta
		meta: { requiresAuth: true }, // Requiere autenticación para poder acceder
	},
];

// Creamos el router usando el historial web y las rutas definidas
const router = createRouter({
	history: createWebHistory(), // Usamos el historial del navegador para una navegación fluida
	routes, // Definimos las rutas para el router
});

// Guardián de rutas (Route Guard) para proteger la vista de Home
router.beforeEach((to, from, next) => {
	const currentUser = auth.currentUser; // Verificamos si el usuario está autenticado
	// Si la ruta requiere autenticación y el usuario no está autenticado, redirigimos a la vista de login
	if (to.matched.some((record) => record.meta.requiresAuth) && !currentUser) {
		next("/login"); // Redirigir al login si no está autenticado
	} else {
		next(); // Continuar con la navegación si está autenticado
	}
});

export default router; // Exportamos el router para usarlo en el archivo principal
