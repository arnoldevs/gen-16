<template>
	<div>
		<input type="text" v-model="text" @keyup.enter="sendText" />
		<button @click="sendText">Send</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			text: "",
		};
	},
	methods: {
		sendText() {
			this.$emit("sendText", this.text);
			this.text = "";
		},
	},
};
</script>
<style scoped>
input {
	width: 100%;
	padding: 0.5rem;
	border: 1px solid #e4e4e4;
	border-radius: 0.2rem;
	margin-bottom: 0.5rem;
	font-size: 1rem;
}
button {
	cursor: pointer;
	font-size: 1rem;
	padding: 0.5rem;
	border: none;
	width: 5rem;
	margin: 1rem;
}
button:hover {
	background-color: #5ebd75;
	color: #fff;
}
</style>
