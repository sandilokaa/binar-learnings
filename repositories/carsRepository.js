const {cars} = require("../models");

class CarsRepository{
    static async getAll({id}){
        let getCars = "";

        if (id) getCars = await cars.findAll({ where: { id: id } });
        else getCars = await cars.findAll();

        return getCars;
    }

    static async getById({id}){
        const getByCarsId = await cars.findAll({where: {id: id}});
        return getByCarsId;
    }

    static async create({name, price, size, image}){
        const createdCar = cars.create({
            name, 
            price, 
            size, 
            image
        });

        return createdCar;
    }

    static async update({id, name, price, size, image}){
        const updatedCar = cars.update({
            name, 
            price, 
            size, 
            image
        }, {
            where: {id}
        });

        return updatedCar;
    }

    static async deleteCar({id}){
        const deletedByCarId = cars.destroy({
            where: {id}
        });
        
        return deletedByCarId;
    }
}

module.exports = CarsRepository;