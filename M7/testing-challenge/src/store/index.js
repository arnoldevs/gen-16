import { createStore } from "vuex";

export default createStore({
	state: {
		count: 0,
	},
	mutations: {
		increment(state) {
			state.count++;
		},
		decrement(state) {
			state.count--;
		},
	},
	actions: {
		incrementByOne({ commit }) {
			commit("increment");
		},
		decrementByOne({ commit }) {
			commit("decrement");
		},
	},
});
