abstract class ConstructObject {
	name: string;
	type: string;

	constructor(name: string, type: string) {
		this.name = name;
		this.type = type;
	}

	abstract destroy(): void;
}

export default ConstructObject;
