import { Animal } from "./Animal.js";

export class Serpiente extends Animal {
	constructor(nombre, edad, imagen, comentarios, sonido) {
		super(nombre, edad, imagen, comentarios, sonido);
	}
	sisear() {
		return "Siseo"
	}
}
