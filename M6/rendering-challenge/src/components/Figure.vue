<template>
	<main>
		<form :class="{ figureForm: formStyle }">
			<div>
				<label for="bgColor">Color de fondo</label>
				<input type="text" id="bgColor" v-model="bgColor" />
			</div>
			<div>
				<label for="textColor">Color de texto</label>
				<input type="text" id="textColor" v-model="textColor" />
			</div>
			<div>
				<label for="showText">Mostrar texto</label>
				<input type="checkbox" id="showText" v-model="showText" />
			</div>
			<div>
				<label for="border">borde</label>
				<input type="range" id="border" v-model="borderRad" min="0" max="50" />
			</div>
			<div>
				<label for="text">Contenido textual</label>
				<textarea id="text" v-model="text"></textarea>
			</div>
			<div>
				<label for="typography">Tipografía</label>
				<select id="typography" v-model="typography">
					<option v-for="font in typographies" :key="font" :value="font">
						{{ font }}
					</option>
				</select>
			</div>
			<div>
				<label for="opaque">Opaco</label>
				<input type="checkbox" id="opaque" v-model="opaque" />
			</div>
			<div>
				<label for="fSize">Tamaño de letra</label>
				<!-- Radio buttons for font size -->
				<div>
					<input type="radio" id="small" v-model="fSize" value="1" />
					<label for="small">Pequeño</label>
					<input type="radio" id="medium" v-model="fSize" value="3" />
					<label for="medium">Mediano</label>
					<input type="radio" id="large" v-model="fSize" value="5" />
					<label for="large">Grande</label>
				</div>
			</div>

			<!-- Hide the figure -->
			<div>
				<label for="hide">Ocultar figura</label>
				<input type="checkbox" id="hide" v-model="hideFigure" />
			</div>
		</form>
		<!-- RESULT -->

		<!-- Display the figure -->
		<!-- v-show implementation to meet the requirements -->
		<div
			:class="{ resultBox: bgColor }"
			:style="{
				backgroundColor: bgColor,
				borderRadius: borderRad + '%',
				opacity: opaque ? '0.5' : '1',
			}"
			v-show="!hideFigure"
		>
			<h1
				v-if="showText"
				:style="{
					color: textColor,
					fontFamily: typography,
					fontSize: fSize + 'rem',
				}"
			>
				{{ text }}
			</h1>
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			bgColor: "",
			textColor: "",
			showText: "",
			borderRad: "",
			text: "",
			typography: "",
			/* Available typographies 
			imported in style.css*/
			typographies: [
				"Dela Gothic One",
				"Cedarville Cursive",
				"Roboto",
				"monospace",
				"sans-serif",
			],
			opaque: "",
			fSize: "",
			formStyle: true,
			hideFigure: "",
		};
	},
};
</script>
<style scoped>
/* Styling for the form */
.figureForm {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	background-color: #2f4f4f;
	color: white;
	padding: 1rem;
	margin-right: 5rem;
}
/* Styling for the figure display */
.resultBox {
	padding: 5rem;
}
/* Main layout */
main {
	display: flex;
	align-items: center;
}
</style>
