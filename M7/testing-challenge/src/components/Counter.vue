<script>
// Import the 'mapState' and 'mapActions' functions from vuex
import { mapActions, mapState } from "vuex";
export default {
	computed: {
		// Map the 'count' property of the vuex state to the 'count' variable
		...mapState(["count"]),
	},
	methods: {
		// Map the 'incrementByOne' and 'decrementByOne' actions to the 'increment' and 'decrement' methods
		// This will be called when the buttons (+/-) are clicked
		...mapActions(["incrementByOne", "decrementByOne"]),
	},
};
</script>
<template>
	<div class="counter">
		<h1 class="title">Counter</h1>
		<p class="sub-title">The count is: {{ count }}</p>
		<div>
			<button @click="incrementByOne">+</button>
			<button @click="decrementByOne">-</button>
		</div>
	</div>
</template>
<style scoped>
.counter {
	text-align: center;
}
button {
	font-size: 1.5rem;
	cursor: pointer;
	border: none;
	margin: 0.5rem;
	border-radius: 0.2rem;
}
button:hover {
	background-color: #5ebd75;
	color: #fff;
}
</style>
