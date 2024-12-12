<template>
	<div>
		<h1>User System</h1>
		<div>
			<form @submit.prevent="addUser">
				<label for="name">Name:</label>
				<input
					type="text"
					id="name"
					placeholder="User name"
					v-model="name"
					required
				/>
				<label for="email">Email:</label>
				<input
					type="email"
					id="email"
					placeholder="User email"
					v-model="email"
					required
				/>
				<label for="country">Country:</label>
				<input
					type="text"
					id="country"
					placeholder="User country"
					v-model="country"
					required
				/>
				<button type="submit">Add User</button>
			</form>
		</div>
	</div>
</template>
<script>
import { getFirestore, collection, addDoc } from "firebase/firestore";
import firebaseApp from "../firebaseConfig";
export default {
	data() {
		return {
			name: "",
			email: "",
			country: "",
		};
	},
	methods: {
		async addUser() {
			if (!this.name === "" || !this.email === "" || !this.country === "") {
				return;
			}
			const db = getFirestore(firebaseApp);
			const usersRef = collection(db, "users");
			await addDoc(usersRef, {
				name: this.name,
				email: this.email,
				country: this.country,
			});
			this.name = "";
			this.email = "";
			this.country = "";
		},
	},
};
</script>

<style scoped>
form {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-top: 1rem;
	width: max-content;
	max-width: 20rem;
}
input {
	padding: 0.5rem;
	border: 1px solid #ccc;
	border-radius: 0.5rem;
}
button {
	margin-top: 1rem;
	padding: 0.5rem;
	border: 1px solid #ccc;
	border-radius: 0.5rem;
	background-color: #333;
	color: #fff;
}
button:hover {
	background-color: rgb(57, 124, 57);
}
</style>
