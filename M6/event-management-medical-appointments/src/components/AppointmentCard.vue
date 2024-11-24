<template>
	<!-- asigna el color de fondo de acuerdo a la gravedad de la cita medica -->
	<div class="appointment-card" :class="`severity-${appointment?.severity}`">
		<p>Paciente: {{ appointment?.name }}</p>
		<p>Fecha: {{ appointment?.date }}</p>
		<p>Hora: {{ appointment?.time }}</p>
		<!-- <p v-if="appointment.severity === '0'">Muy grave</p>
			<p v-else-if="appointment.severity === '1'">Grave</p>
			<p v-else-if="appointment.severity === '2'">Moderada</p>
			<p v-else-if="appointment.severity === '3'">Leve</p>
			<p v-else>N/A</p> -->
		<p>Motivo: {{ appointment?.reason }}</p>

		<!-- Botón para eliminar la cita médica -->
		<button
			class="delete-button"
			@click="$emit('deleteAppointment', appointment.id)"
		>
			Eliminar
		</button>
	</div>
</template>

<script>
export default {
	// se pasa el objeto de la cita médica como prop
	props: ["appointment"],
};
</script>
<style scoped>
.appointment-card {
	padding: 10px;
	border: 1px solid #333;
	border-radius: 5px;
	margin-bottom: 10px;
}
.delete-button {
	margin-top: 10px;
	padding: 5px;
	cursor: pointer;
}
.delete-button:hover {
	background-color: #333;
	color: #fff;
	transition: transform 0.3s ease;
	box-shadow: 0 0 5px #333;
	transform: scale(1.1);
}
.severity-3 {
	background-color: #f0f0f0;
}
.severity-2 {
	background-color: #00ff00;
}
.severity-1 {
	background-color: #ffff00;
}
.severity-0 {
	background-color: #ff0000;
	color: #fff;
}
</style>
