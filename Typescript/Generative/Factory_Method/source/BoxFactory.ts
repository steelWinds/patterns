import Factory from './Factory.ts';
import StorageBox from './StorageBox.ts';

class BoxFactory extends Factory {
	createStorage(): IStorage {
		const box = new StorageBox();

		this.addItem(box);

		return box;
	}
}

export default BoxFactory;
