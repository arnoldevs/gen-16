<template>
	<div class="messages-container">
		<div
			v-for="(message, index) in messages"
			:key="index"
			class="message"
			:class="{
				'message-left': message.user === users[0],
				'message-right': message.user === users[1],
			}"
			:style="{
				backgroundColor:
					message.user === users[0] ? emphasisColorUser1 : emphasisColorUser2,
			}"
		>
			<p>
				<strong>{{ message.user.name.first }}:</strong> {{ message.text }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "Chat",
	props: {
		messages: Array,
		users: Array,
		emphasisColorUser1: String,
		emphasisColorUser2: String,
	},
};
</script>

<style scoped>
.messages-container {
	min-width: 600px;
	padding: 1rem;
	border: 1px solid #ddd;
	border-radius: 5px;
	min-height: 400px;
	overflow-y: auto;
	background-image: url("../assets/chat.jpg");
}

.message {
	margin: 1rem 0;
	padding: 5px 5px;
	border-radius: 3rem;
	color: #333;
}

.message-left {
	text-align: left;
}

.message-right {
	text-align: right;
}
</style>
