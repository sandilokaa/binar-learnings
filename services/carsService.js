const carsRepository = require("../repositories/carsRepository");

class CarsService{

    static async getAll(){
        // Memanggil Repository
        const getCars = await carsRepository.getAll();

        return getCars;
    }

    static async create({name, price, size, image}){
        // Memanggil Repository
        const createdCar = await carsRepository.create({
            name, 
            price, 
            size, 
            image
        });
        
        return createdCar;
    }

    static async update({id, name, price, size, image}){
        // Memanggil Repository
        const updatedCar = await carsRepository.update({
            id,
            name, 
            price, 
            size, 
            image,
        });
        console.log(updatedCar);
        return updatedCar;
    }

    static async getById({id}){
        const getByCarsId = await carsRepository.getById({id});
        return getByCarsId;
    }

    static async deleteCar({id}){
        const deletedByCarId = await carsRepository.deleteCar({id});
        return deletedByCarId;
    }

}

module.exports = CarsService;