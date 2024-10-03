import { Animal } from "./Animal.js";

export class Leon extends Animal {
	constructor(nombre, edad, imagen, comentarios, sonido) {
		super(nombre, edad, imagen, comentarios, sonido);
	}
	rugir() {
		console.log("Leon rugió");
	}
}
