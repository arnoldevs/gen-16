<template>
	<nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/posts">Posts</router-link>
		<router-link to="/about">About</router-link>
		<router-link to="/contact">Contact</router-link>
	</nav>
	<router-view />
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	min-height: 100vh;
}

nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
	text-decoration: none;
	padding: 10px;
}
nav a:hover {
	color: #42b983;
}

nav a.router-link-exact-active {
	color: #42b983;
}
</style>
