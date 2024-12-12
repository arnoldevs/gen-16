// Import Vuex createStore to create a centralized state store
import { createStore } from "vuex";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import firebaseApp from "../firebaseConfig";

const store = createStore({
	state: {
		users: [],
	},
	mutations: {
		setUsers(state, users) {
			state.users = users;
		},
	},
	actions: {
		getUsers({ commit }) {
			const db = getFirestore(firebaseApp);
			const usersRef = collection(db, "users");
			onSnapshot(usersRef, (snapshot) => {
				const users = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				commit("setUsers", users);
			});
		},
	},
	modules: {},
});

export default store;
