import ConstructObject from './ConstructObject.ts';

class Bike extends ConstructObject {
	constructor(name: string) {
		super(name, 'bike')
	}

	destroy(): void {
		console.log(`Special destroy ${this.name} with type ${this.type}`)
	}
}

export default Bike;
