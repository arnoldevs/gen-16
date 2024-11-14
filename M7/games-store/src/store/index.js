import { createStore } from "vuex";
// Importamos el modulo de estado del producto
import productState from "./modules/productState";
export default createStore({
	// En este caso todas las mutaciones estados y acciones se encuentran en el mismo archivo modular
	modules: {
		productState,
	},
});
