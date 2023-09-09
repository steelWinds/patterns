class MercedesCar implements ICar {
	name: string;

	constructor(name: string) {
		this.name = name
	}

	drive(): string {
		return '200 miles per hour'
	}
}

export default MercedesCar
