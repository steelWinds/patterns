abstract class Factory {
	#items: IStorage[]

	constructor() {
		this.#items = [];
	}

	abstract createStorage(): IStorage;

	get items(): IStorage[] {
		return this.#items;
	}

	addItem(item: IStorage): void {
		this.#items.push(item);
	}
}

export default Factory;
