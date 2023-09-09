import ToyotaFactory from "./source/ToyotaFactory.ts";
import MercedesFactory from "./source/MercedesFactory.ts";

const toyotaFactory = new ToyotaFactory()
const mercedesFactory = new MercedesFactory()

console.log(`Mercedes factory obj: ${mercedesFactory.createCar('mercedes').name}`)
console.log(`Toyota factory obj: ${toyotaFactory.createCar('toyota').name}`)
