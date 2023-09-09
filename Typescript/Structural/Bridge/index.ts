import Destroyer from "./source/Destroyer.ts";
import Bike from "./source/Bike.ts";
import Car from "./source/Car.ts";
import Airplane from "./source/Airplane.ts";

const carDestoyer = new Destroyer(new Car('my car'));
const airplaneDestoyer = new Destroyer(new Airplane('my airplane'));
const bikeDestroyer = new Destroyer(new Bike('my car'));

carDestoyer.destroy();
airplaneDestoyer.destroy();
bikeDestroyer.destroy();
