import ConstructObject from "./ConstructObject.ts";

class Destroyer implements IDestroyer {
	#object: ConstructObject;

	constructor(object: ConstructObject) {
		this.#object = object;
	}

	#collectGarbage() {
		console.log(`Collecting garbage of ${this.#object.name} with type ${this.#object.type}`);
	}

	destroy() {
		this.#object.destroy();

		this.#collectGarbage();
	}
}

export default Destroyer;
