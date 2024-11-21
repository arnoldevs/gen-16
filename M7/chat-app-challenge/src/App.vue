<template>
	<h1>Chat</h1>

	<!-- Contenedor del chat -->
	<div class="chat">
		<!-- Usuario 1 -->
		<div class="user1">
			<img
				:src="users[0]?.picture.large"
				:alt="users[0]?.name.first"
				class="user-image"
			/>
			<span>{{ users[0]?.name.first }} {{ users[0]?.name.last }}</span>
			<input type="color" class="emphasisColor" v-model="emphasisColorUser1" />
			<textarea
				v-model="messageUser1"
				placeholder="Escribe tu mensaje..."
				rows="3"
				cols="20"
				name="message"
			></textarea>
			<button @click="sendMessage(0)" class="btn">Enviar</button>
		</div>

		<!-- Mensajes -->
		<Chat
			:messages="messages"
			:users="users"
			:emphasisColorUser1="emphasisColorUser1"
			:emphasisColorUser2="emphasisColorUser2"
		/>

		<!-- Usuario 2 -->
		<div class="user2">
			<img
				:src="users[1]?.picture.large"
				:alt="users[1]?.name.first"
				class="user-image"
			/>
			<span>{{ users[1]?.name.first }} {{ users[1]?.name.last }}</span>
			<input type="color" class="emphasisColor" v-model="emphasisColorUser2" />
			<textarea
				v-model="messageUser2"
				placeholder="Escribe tu mensaje..."
				rows="3"
				cols="20"
				name="message"
			></textarea>
			<button @click="sendMessage(1)" class="btn">Enviar</button>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import Chat from "./components/Chat.vue";

export default {
	name: "App",
	components: {
		Chat,
	},
	data() {
		return {
			users: [], // Datos de los usuarios tras el llamado a la API de randomuser.me
			messages: [], // Mensajes enviados por el usuario
			messageUser1: "",
			messageUser2: "",
			emphasisColorUser1: "#ffffff",
			emphasisColorUser2: "#ffffff",
		};
	},
	async mounted() {
		// Consumir API para obtener los usuarios
		try {
			const response = await axios.get("https://randomuser.me/api/?results=2");
			this.users = response.data.results;
		} catch (error) {
			console.error("Error to fetch users:", error);
		}
	},
	methods: {
		sendMessage(userId) {
			// Determina el mensaje y el usuario que envía
			const message = userId === 0 ? this.messageUser1 : this.messageUser2;

			// Solo agregar mensaje si no está vacío
			if (message.trim()) {
				this.messages.push({
					text: message,
					user: this.users[userId],
				});

				// Limpiar el campo de mensaje del usuario correspondiente
				if (userId === 0) {
					this.messageUser1 = "";
				} else {
					this.messageUser2 = "";
				}
			}
		},
	},
};
</script>

<style>
.chat {
	display: flex;
	align-items: center;
	gap: 3rem;
}

.user1,
.user2 {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
}

.user-image {
	border-radius: 50%;
}

span {
	margin-top: 5px;
}

.btn {
	width: 100%;
}
.emphasisColor {
	width: 100%;
}
</style>
