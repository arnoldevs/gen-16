<template>
	<div class="contact">
		<h1 class="m-5">Ésta es una página de contacto</h1>
		<!-- Botón para volver al inicio -->
		<button class="btn btn-outline-secondary">
			<!-- Redirección a la página de inicio a través de RouterLink -->
			<RouterLink to="/" class="text-decoration-none text-dark"
				>Volver al inicio</RouterLink
			>
		</button>
	</div>
</template>

<style scoped>
@media (min-width: 1024px) {
	.contact {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
}
</style>
