<template>
	<div class="contact">
		<form action="">
			<input type="text" placeholder="Correo electrónico" />
			<textarea placeholder="Mensaje" rows="5" cols="30"></textarea>
			<button type="submit">Enviar</button>
		</form>
	</div>
</template>

<script>
export default {
	name: "ContactView",
};
</script>
<style scoped>
form {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 400px;
	margin: 0 auto;
}
input,
textarea {
	padding: 10px;
	margin: 10px 0;
	width: 100%;
	border: 1px solid #ccc;
	border-radius: 5px;
}
button {
	background-color: #4caf50;
	color: white;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	margin: 10px 0;
}
</style>
