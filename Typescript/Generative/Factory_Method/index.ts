import BoxFactory from './source/BoxFactory.ts'
import PacketFactory from './source/PacketFactory.ts'

const packetFactory = new PacketFactory();

console.log(`Creating StoragePacket 1`, packetFactory.createStorage())
console.log(`Creating StoragePacket 2`, packetFactory.createStorage())
console.log(`List items of PacketFactory`, packetFactory.items)

const boxFactory = new BoxFactory();

console.log(`Creating StorageBox 1`, boxFactory.createStorage())
console.log(`Creating StorageBox 2`, boxFactory.createStorage())
console.log(`List items of BoxFactory`, boxFactory.items)
