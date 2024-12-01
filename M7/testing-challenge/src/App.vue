<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<div>
		<RouterLink to="/counter" class="router-link">Counter</RouterLink>
		<RouterLink to="/text" class="router-link">Text</RouterLink>
		<RouterLink to="/" class="router-link">Home</RouterLink>
	</div>
	<RouterView />
</template>
<style>
#app {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	text-align: center;
}
.router-link {
	text-decoration: none;
	color: #333;
	background-color: #fff;
	padding: 0.5rem;
	cursor: pointer;
	border: 1px solid #e4e4e4;
}
.router-link:hover {
	border: 1px solid #5ebd75;
	background-color: #5ebd75;
	color: #fff;
}
</style>
