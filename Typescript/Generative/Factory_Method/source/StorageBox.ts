class StorageBox implements IStorage {
	add(item: string): string {
		console.log(`${item} added to box`);

		return item;
	}
}

export default StorageBox;
