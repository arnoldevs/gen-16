<template>
	<!-- Contenedor principal -->
	<section
		class="products d-flex flex-column justify-content-center align-items-center"
	>
		<div class="row">
			<!-- Iteramos sobre los productos y mostramos cada uno en una columna  dentro de una card -->
			<div
				class="col-sm-4 col-12 d-flex justify-content-center align-items-center g-5"
				v-for="product in products"
				:key="product.name"
			>
				<div class="card w-75">
					<!-- Tuve que agregar el src (carpeta) a la ruta para que pudiera visualizarse la imagen en el DOM -->
					<img
						:src="'../src/assets/img/' + product.imageUrl"
						class="card-img-top"
						:alt="product.name + ' image'"
					/>
					<div class="card-body">
						<h5 class="card-title fw-bold">{{ product.name }}</h5>
						<p class="card-text">
							{{ product.description }}
						</p>
					</div>
					<ul class="list-group list-group-flush">
						<li class="list-group-item">Precio: ${{ product.price }}</li>
						<li class="list-group-item">Cantidad: {{ product.amount }}</li>
					</ul>
					<div class="card-body">
						<a href="#" class="card-link">Ver más</a>
						<a href="#" class="card-link">Comprar</a>
					</div>
				</div>
			</div>
		</div>
		<button class="btn btn-outline-secondary m-5">
			<!-- Redirección a la página de inicio a través de RouterLink -->
			<RouterLink to="/" class="text-decoration-none text-dark"
				>Volver al inicio</RouterLink
			>
		</button>
	</section>
</template>
<script>
export default {
	// Propiedades que se utilizarán en la vista
	// En este caso, la propiedad "products" será una matriz de objetos
	props: {
		products: {
			type: Array,
			required: true,
		},
	},
};
</script>
<style scoped>
.products {
	margin-top: 6rem;
}
</style>
