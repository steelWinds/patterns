import ToyotaCar from "./ToyotaCar.ts"

class ToyotaFactory implements IFactory {
	createCar(name: string) {
		return new ToyotaCar(name)
	}
}

export default ToyotaFactory
