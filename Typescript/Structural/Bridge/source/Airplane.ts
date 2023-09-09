import ConstructObject from './ConstructObject.ts';

class Airplane extends ConstructObject {
	constructor(name: string) {
		super(name, 'airplane')
	}

	destroy(): void {
		console.log(`Special destroy ${this.name} with type ${this.type}`)
	}
}

export default Airplane;
