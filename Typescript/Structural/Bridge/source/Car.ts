import ConstructObject from './ConstructObject.ts';

class Car extends ConstructObject {
	constructor(name: string) {
		super(name, 'car')
	}

	destroy(): void {
		console.log(`Special destroy ${this.name} with type ${this.type}`)
	}
}

export default Car;
