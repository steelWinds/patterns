import MercedesCar from "./MercedesCar.ts"

class MercedesFactory implements IFactory {
	createCar(name: string) {
		return new MercedesCar(name)
	}
}

export default MercedesFactory
