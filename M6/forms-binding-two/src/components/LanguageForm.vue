<template>
	<div class="container d-flex justify-content-between align-items-center mt-5">
		<form class="bg-dark text-light p-5 rounded-3">
			<!-- Titulo -->
			<div class="mb-3">
				<label class="form-label">Título:</label>
				<input class="form-control" v-model="title" />
			</div>

			<hr class="border border-secondary border-2 opacity-50" />

			<!-- Emoji -->
			<div class="mb-3">
				<label class="form-label">Emoji:</label>
				<select class="form-select" v-model="emoji">
					<option value="">Seleccione un emoji</option>
					<option
						v-for="(emoji, index) in emojis"
						:key="index"
						:value="emoji"
						class="fs-3"
					>
						{{ emoji }}
					</option>
				</select>
			</div>
			<hr class="border border-secondary border-2 opacity-50" />

			<!-- Apreciacion -->
			<div class="mb-3">
				<label class="form-label">Apreciación:</label>
				<div class="d-flex gap-3">
					<div class="form-check">
						<input
							class="form-check-input"
							type="radio"
							name="flexRadioDefault"
							id="regular"
							value="Regular"
							v-model="apreciacion"
						/>
						<label class="form-check-label" for="regular">Regular</label>
					</div>
					<div class="form-check">
						<input
							class="form-check-input"
							type="radio"
							name="flexRadioDefault"
							id="bien"
							value="Bien"
							v-model="apreciacion"
						/>
						<label class="form-check-label" for="bien">Bien</label>
					</div>
					<div class="form-check">
						<input
							class="form-check-input"
							type="radio"
							name="flexRadioDefault"
							id="muyBien"
							value="Muy Bien"
							v-model="apreciacion"
						/>
						<label class="form-check-label" for="muyBien">Muy Bien</label>
					</div>
					<div class="form-check">
						<input
							class="form-check-input"
							type="radio"
							name="flexRadioDefault"
							id="increible"
							value="Increíble"
							v-model="apreciacion"
						/>
						<label class="form-check-label" for="increible">Increíble</label>
					</div>
				</div>
			</div>

			<hr class="border border-secondary border-2 opacity-50" />

			<!-- Competencias -->
			<div class="mb-3">
				<label class="form-label">Competencias aprendidas:</label>
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						value="Morfología de un componente"
						v-model="competencias"
					/>
					<label class="form-check-label">Morfología de un componente</label>
				</div>
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						value="One-Way y Two-Way data binding"
						v-model="competencias"
					/>
					<label class="form-check-label">One-Way y Two-Way data binding</label>
				</div>
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						value="El patrón de diseño MVVM"
						v-model="competencias"
					/>
					<label class="form-check-label">El patrón de diseño MVVM</label>
				</div>
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						value="Directivas"
						v-model="competencias"
					/>
					<label class="form-check-label">Directivas</label>
				</div>
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						value="Estado"
						v-model="competencias"
					/>
					<label class="form-check-label">Estado</label>
				</div>
			</div>

			<hr class="border border-secondary border-2 opacity-50" />

			<!-- Opinion -->
			<div class="">
				<label for="floatingTextarea">Opinión:</label>
				<textarea
					class="form-control"
					id="floatingTextarea"
					rows="3"
					v-model="opinion"
				></textarea>
			</div>
		</form>

		<div class="text-center mx-3">
			<p class="fs-1">{{ emoji }}</p>
			<h1>{{ title }}</h1>
			<h4>
				Y me parece <span>{{ apreciacion }}</span>
			</h4>
			<h4>He aprendido:</h4>
			<p>{{ competencias.join(", ") }}</p>
			<h5>Mi opinión hasta ahora del framework es:</h5>
			<p>{{ opinion }}</p>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			title: "",
			emoji: "",
			emojis: ["🧑🏻‍💻", "🤓", "🤔", "🤬", "😍", "😭"],
			apreciacion: "",
			competencias: [],
			opinion: "",
		};
	},
};
</script>
