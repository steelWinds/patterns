class StoragePacket implements IStorage {
	add(item: string): string {
		console.log(`${item} added to packet`);

		return item;
	}
}

export default StoragePacket;
