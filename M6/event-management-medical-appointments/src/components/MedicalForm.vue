<template>
	<section>
		<!-- A traves del evento submit.prevent, se evita que el formulario se envíe al servidor -->
		<form action="" id="medical-form" @submit.prevent="addAppointment">
			<div id="inputs">
				<div>
					<label for="name" :class="{ 'empty-input': !name }">Nombre</label>
					<input type="text" id="name" name="name" v-model="name" />
				</div>
				<div>
					<label for="date" :class="{ 'empty-input': !date }">Fecha</label>
					<input type="date" id="date" name="date" v-model="date" />
				</div>
				<div>
					<label for="time" :class="{ 'empty-input': !time }">Hora</label>
					<input type="time" id="time" name="time" v-model="time" />
				</div>
				<div>
					<label for="severity" :class="{ 'empty-input': !severity }"
						>Gravedad</label
					>
					<select id="severity" name="severity" v-model="severity">
						<option value="0">Muy grave</option>
						<option value="1">Grave</option>
						<option value="2">Moderada</option>
						<option value="3">Leve</option>
					</select>
				</div>
				<div>
					<label for="reason" :class="{ 'empty-input': !reason }">Motivo</label>
					<input type="text" id="reason" name="reason" v-model="reason" />
				</div>
			</div>
			<!-- Por defecto, el botón de agregar es deshabilitado si no se completan todos los campos del formulario -->
			<button type="submit" id="submit" :disabled="!emptyForm">Agregar</button>
		</form>
	</section>
</template>

<script>
export default {
	data() {
		return {
			name: "",
			date: "",
			time: "",
			severity: "",
			reason: "",
		};
	},
	computed: {
		// Esta funcion verfica que todos los campos del formulario sean llenados antes de habilitar el botón de agregar
		emptyForm() {
			return (
				this.name && this.date && this.time && this.severity && this.reason
			);
		},
	},
	methods: {
		addAppointment() {
			this.$emit("addAppointment", {
				// Generar un identificador único para cada cita médica
				id: Math.random().toString(36).substring(2, 15),
				name: this.name,
				date: this.date,
				time: this.time,
				severity: this.severity,
				reason: this.reason,
			});
			// Restablecer los campos del formulario utilizando las propiedades de data del componente
			this.name = "";
			this.date = "";
			this.time = "";
			this.severity = "";
			this.reason = "";
		},
	},
};
</script>
<style scoped>
.empty-input {
	color: red;
}
#medical-form {
	padding: 1rem;
	box-sizing: border-box;
	background-color: #f0f0f0;
	color: #333;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid #333;
	border-radius: 5px;
}
#inputs {
	display: flex;
	gap: 10px;
	padding: 10px;
}
#inputs > div {
	display: flex;
	flex-direction: column;
	text-align: center;
}
#submit {
	margin-top: 10px;
	padding: 5px;
	cursor: pointer;
}
</style>
