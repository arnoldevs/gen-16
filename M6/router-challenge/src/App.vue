<script setup>
// Importacion de RouterLink y RouterView
import { RouterLink, RouterView } from "vue-router";
// Importacion de los componentes
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
	<!-- Renderizamos los componentes -->
	<Navbar />
	<RouterView />
	<Footer />
</template>
