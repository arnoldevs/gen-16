<template>
	<div>
		<h1>Administrador de Citas Médicas</h1>
		<!-- Se pasa el evento addAppointment como prop a la función de agregar cita medica -->
		<MedicalForm @addAppointment="addAppointment" />

		<div v-if="appointments.length > 0">
			<h2>Citas Registradas</h2>
			<AppointmentCard
				v-for="appointment in appointments"
				:key="appointment.id"
				:appointment="appointment"
				@deleteAppointment="deleteAppointment"
			/>
		</div>
		<p v-else>Aún no hay consultas registradas</p>
	</div>
</template>

<script>
import MedicalForm from "./components/MedicalForm.vue";
import AppointmentCard from "./components/AppointmentCard.vue";

export default {
	components: {
		MedicalForm,
		AppointmentCard,
	},
	data() {
		return {
			appointments: [],
		};
	},
	methods: {
		addAppointment(newAppointment) {
			// Agrega la cita medica al array de citas medicas
			this.appointments.push(newAppointment);
		},
		// Elimina la cita medica del array de citas medicas
		// por medio del id que pasamos desde la funcion de agregar que pasamos desde el componente MedicalForm
		deleteAppointment(id) {
			this.appointments = this.appointments.filter(
				(appointment) => appointment.id !== id,
			);
		},
	},
};
</script>
