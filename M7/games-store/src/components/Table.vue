<template>
	<main>
		<h1>Tienda 32 Bits</h1>
		<h2>Tienda de Juegos</h2>
		<table>
			<thead>
				<tr>
					<th>Código</th>
					<th>Nombre</th>
					<th>Stock</th>
					<th>Precio</th>
					<th>Color</th>
					<th>Cambiar Stock</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="producto in productos" :key="producto.codigo">
					<td>{{ producto.codigo }}</td>
					<td>{{ producto.nombre }}</td>
					<td>{{ producto.stock }}</td>
					<td>{{ producto.precio }}</td>
					<td>{{ producto.color }}</td>
					<td>
						<button @click="aumentarStock(producto.codigo)">+</button>
						<button @click="reducirStock(producto.codigo)">-</button>
					</td>
				</tr>
			</tbody>
		</table>
	</main>
</template>
<script>
// Importamos mapState y mapActions de Vuex
import { mapState, mapActions } from "vuex";
export default {
	computed: {
		...mapState({
			// Llamamos a la propiedad productos de la store
			//  Este codigo es necesario para que sea reconocido el state que se encuentra modularizado
			// y pueda ser renderizado en el DOM
			productos: (state) => state.productState.productos,
		}),
	},
	methods: {
		// Metdodos para aumentar y disminuir el stock
		...mapActions(["aumentarStock", "reducirStock"]),
		aumentarStock(codigo) {
			this.$store.dispatch("aumentarStock", codigo);
		},
		reducirStock(codigo) {
			this.$store.dispatch("reducirStock", codigo);
		},
	},
};
</script>
<style scoped>
main {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	gap: 2.5rem;
}
table * {
	border: 1px solid #ccc;
	text-align: center;
	padding: 0.5rem;
}
button {
	cursor: pointer;
}
button:hover {
	background-color: #ccc;
	color: #343a40;
}
h1 {
	/* Solo se aplica al abrir o recargar la página */
	animation: desplazamiento 2s;
	font-size: 3rem;
}
/* Animacion que desplaza el texto desde la parte superior */
@keyframes desplazamiento {
	0% {
		transform: translateY(-50px);
		opacity: 0;
	}
	100% {
		transform: translateY(0);
		opacity: 1;
	}
}
</style>
