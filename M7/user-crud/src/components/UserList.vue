<template>
	<div>
		<h2>Registered users</h2>
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Country</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="user in users" :key="user.id">
					<td>{{ user.name }}</td>
					<td>{{ user.email }}</td>
					<td>{{ user.country }}</td>
					<td>
						<button class="edit-btn" @click="openEditModal(user)">Edit</button>
						<button class="delete-btn" @click="deleteUser(user.id)">
							Delete
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<EditUserModal
		:show-modal="showModal"
		:user="selectedUser"
		@userUpdated="handleCloseModal"
		@closeModal="handleCloseModal"
	/>
</template>
<script>
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import { mapState, mapActions } from "vuex";
import firebaseApp from "../firebaseConfig";
import EditUserModal from "./EditUserModal.vue";

export default {
	computed: {
		// Obtain the array of users from the Vuex state using mapState
		...mapState(["users"]),
	},
	methods: {
		...mapActions(["getUsers"]),
		// Delete a user from the Firestore database by receiving their id
		async deleteUser(id) {
			const db = getFirestore(firebaseApp);
			const userRef = doc(db, "users", id);
			await deleteDoc(userRef);
		},
		// Open the EditUserModal component and pass the selected user
		openEditModal(user) {
			this.selectedUser = user;
			this.showModal = true;
		},
		// Handles the closeModal event emitted by the EditUserModal component
		handleCloseModal(updatedUser) {
			if (updatedUser) {
				const userIndex = this.users.findIndex((u) => u.id === updatedUser.id);
				if (userIndex !== -1) {
					this.$set(this.users, userIndex, updatedUser);
				}
			}

			this.showModal = false;
		},
	},
	created() {
		this.getUsers();
	},
	data() {
		return {
			showModal: false,
			selectedUser: {},
		};
	},
	components: {
		EditUserModal,
	},
};
</script>
<style scoped>
table {
	/* width: 100%; */
	border-collapse: collapse;
	margin-top: 1rem;
	margin-bottom: 1rem;
}
th,
td {
	padding: 0.5rem;
	border: 1px solid #ccc;
}
th {
	background-color: #555;
}

tr:hover {
	background-color: #444;
}
th {
	padding-top: 1rem;
	padding-bottom: 1rem;
	text-align: center;
}
button {
	padding: 0.5rem;
	border: 1px solid #ccc;
	border-radius: 0.5rem;
	background-color: #333;
	color: #fff;
}
.delete-btn:hover {
	background-color: rgb(158, 59, 59);
}
.edit-btn:hover {
	background-color: rgb(124, 124, 48);
}
</style>
