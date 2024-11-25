<template>
	<div class="notification">
		<span>{{ message }}</span>
	</div>
</template>

<script>
export default {
	props: {
		message: {
			type: String,
			required: true,
		},
	},
};
</script>

<style scoped>
.notification {
	/* Estilos para la notificación */
	font-size: 1.5rem;
	position: fixed;
	top: 20px;
	right: 20px;
	background-color: #f0ad4e;
	color: #fff;
	padding: 10px;
	border-radius: 5px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}
span {
	text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}
</style>
