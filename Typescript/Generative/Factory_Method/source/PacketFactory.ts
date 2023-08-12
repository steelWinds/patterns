import Factory from './Factory.ts';
import StoragePacket from './StoragePacket.ts';

class PacketFactory extends Factory {
	createStorage(): IStorage {
		const packet = new StoragePacket();

		this.addItem(packet);

		return packet;
	}
}

export default PacketFactory;
