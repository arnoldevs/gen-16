// Importamos el archivo de datos JSON
import productsJson from "@/db/juegos.json";
export default {
	// Manejamos el estado del producto de manera modular ademas de las mutaciones y acciones
	state: {
		productos: productsJson,
	},
	mutations: {
		incrementar(state, codigo) {
			// Encontramos el producto en el estado
			const producto = state.productos.find((p) => p.codigo === codigo);
			// Si existe el producto incrementamos el stock
			if (producto) {
				producto.stock++;
			}
		},
		disminuir(state, codigo) {
			// Encontramos el producto en el estado
			const producto = state.productos.find((p) => p.codigo === codigo);
			// Si existe el producto y el stock es mayor a cero, decrementamos el stock
			if (producto && producto.stock > 0) {
				producto.stock--;
			}
		},
	},
	actions: {
		aumentarStock(context, codigo) {
			// Llamamos al método de la mutación incrementar
			// commit() es una función de Vuex que envía una mutación a la store
			context.commit("incrementar", codigo);
		},
		reducirStock(context, codigo) {
			context.commit("disminuir", codigo);
		},
	},
};
