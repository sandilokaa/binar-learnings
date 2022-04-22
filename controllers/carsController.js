const carsService = require("../services/carsService");

const getAll = async (req, res) => {
    const{id} = req.params;
    const getCars = await carsService.getAll({id});
    return getCars;
}

const create = async (req, res) => {
    const {name, price, size, image} = req.body;

    const createdCar = await carsService.create({name, price, size, image});

    res.redirect("/");
}

const update = async (req, res) => {
    const {id} = req.params;
    const {name, price, size, image} = req.body;

    const updatedCar = await carsService.update({id, name, price, size, image});

    res.redirect("/");
}

const getById = async (req, res) => {
    const {id} = req.params;
    const getByCarsId = await carsService.getById({id});

    res.send(getByCarsId);
}

const deleteCar = async (req, res) => {
    const {id} = req.params;
    const deletedByCarId = await carsService.deleteCar({id});

    res.redirect("/");
}

module.exports = {getAll, create, update, getById, deleteCar};