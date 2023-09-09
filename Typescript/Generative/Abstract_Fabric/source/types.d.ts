interface ICar {
	name: string;

	drive(): string
}

interface IFactory {
	createCar(name: string): ICar
}
