class ToyotaCar implements ICar {
	name: string;

	constructor(name: string) {
		this.name = name
	}

	drive(): string {
		return '100 miles per hour'
	}
}

export default ToyotaCar
