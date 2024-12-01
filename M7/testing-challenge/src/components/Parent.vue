<template>
	<div>
		<h1 class="title">Comunication</h1>
		<p class="sub-title">Text received from child: {{ text }}</p>
		<Child @sendText="receiveText" />
	</div>
</template>

<script>
import Child from "./Child.vue";
export default {
	components: {
		Child,
	},
	data() {
		return {
			text: "",
		};
	},
	methods: {
		receiveText(newText) {
			this.text = newText;
		},
	},
};
</script>
