<template>
	<div class="modal" v-if="showModal">
		<div class="modal-content">
			<span class="close" @click="$emit('closeModal')">&times;</span>
			<h2>Edit user</h2>
			<form @submit.prevent="modifyUser">
				<input
					type="text"
					v-model="editedUser.name"
					:placeholder="this.user.name"
					required
				/>
				<input
					type="email"
					v-model="editedUser.email"
					:placeholder="this.user.email"
					required
				/>
				<input
					type="text"
					v-model="editedUser.country"
					:placeholder="this.user.country"
					required
				/>
				<button type="submit">Save</button>
			</form>
		</div>
	</div>
</template>

<script>
// Import the Firestore and FirebaseApp modules from the Firebase SDK
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import firebaseApp from "../firebaseConfig";

export default {
	name: "EditUserModal",
	props: {
		showModal: {
			type: Boolean,
			required: true,
		},
		user: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			editedUser: {},
		};
	},
	mounted() {
		// Create a copy of the user to avoid direct modifications
		this.editedUser = JSON.parse(JSON.stringify(this.user));
	},
	methods: {
		async modifyUser() {
			const db = getFirestore(firebaseApp);
			const userRef = doc(db, "users", this.user.id);

			// Update user data with the new information
			await updateDoc(userRef, {
				name: this.editedUser.name,
				email: this.editedUser.email,
				country: this.editedUser.country,
			});

			// Emit an event to notify parent about update and close request
			this.$emit("userUpdated", this.editedUser); // Pass the updated user data
		},
	},
};
</script>

<style scoped>
.modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
}
.modal-content {
	background-color: #333;
	padding: 1rem;
	border-radius: 0.5rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	width: max-content;
	max-width: 30rem;
}
.close {
	font-size: 1.5rem;
	font-weight: bold;
	cursor: pointer;
}
h2 {
	text-align: center;
	margin-bottom: 1rem;
}
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
