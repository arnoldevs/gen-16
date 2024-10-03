import { Animal } from "./Animal.js";

export class Aguila extends Animal {
	constructor(nombre, edad, imagen, comentarios, sonido) {
		super(nombre, edad, imagen, comentarios, sonido);
	}
	chillar() {
		console.log("Aguila chilló");
	}
}
