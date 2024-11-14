import { createRouter, createWebHistory } from "vue-router";
//  Importación de las vistas
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import ProductsView from "../views/ProductsView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		// Ruta inicial, Pagina de inicio
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/contact",
			name: "contact",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: ContactView,
		},
		// Ruta para ver los productos
		{
			path: "/products",
			name: "products",
			component: ProductsView,
			// Pasamos la propiedad "products"
			// Esta propiedad será utilizada en la vista
			props: {
				products: [
					{
						name: "Desayunos",
						description: "Contamos con desayunos nutritivos y deliciosos",
						price: 2000,
						amount: "Para dos personas",
						imageUrl: "desayunos.jpg",
					},
					{
						name: "Colaciones",
						description: "Colaciones saludables y balanceadas",
						price: 3000,
						amount: "Para una persona",
						imageUrl: "colaciones.jpg",
					},
					{
						name: "Bebidas",
						description: "Bebidas ricas refrescantes",
						price: 1500,
						amount: "Para una persona",
						imageUrl: "bebidas.jpg",
					},
					{
						name: "Dulces",
						description: "Dulces exquisitos",
						price: 1000,
						amount: "Para una persona",
						imageUrl: "dulces.jpg",
					},
					{
						name: "Empanadas",
						description: "Empanadas tradicionales y exóticas",
						price: 2500,
						amount: "Para una persona",
						imageUrl: "empanadas.jpg",
					},
					{
						name: "Verduras",
						description: "Verduras frescas y deliciosas",
						price: 1000,
						amount: "Para una persona",
						imageUrl: "verduras.jpg",
					},
				],
			},
		},
	],
});
// Exportamos el router
export default router;
