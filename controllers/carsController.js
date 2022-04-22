const carsService = require("../services/carsService");

// Get All Cars
const getAll = async (req, res) => {
    const getCars = await carsService.getAll();
    return getCars;
}

// Create Data Car
const create = async (req, res) => {
    const {name, price, size, image} = req.body;

    const createdCar = await carsService.create({name, price, size, image});

    res.redirect("/");
}

// Update Data
const update = async (req, res) => {
    const {id} = req.params;
    const {name, price, size, image} = req.body;

    const updatedCar = await carsService.update({id, name, price, size, image});
    res.redirect("/");
}

// Get By Cars Id
const getById = async (req, res) => {
    const {id} = req.params;
    const getByCarsId = await carsService.getById({id});

    res.send(getByCarsId);
}

// Render Update Car (Page)
const renderUpdateById = async (req, res) => {
    const {id} = req.params;
    const car = await carsService.getById({id}); 
    res.render("update_car.ejs",{
        car: car,
    });

    // console.log(car);
}


// Render Create Data (Page)
const renderHomePage = async (req, res) => {
    const {id} = req.params;
    const getCars = await carsService.getAll({id}); 
    res.render("index.ejs",{
        cars: getCars,
    });
}

// Delete Cars
const deleteCar = async (req, res) => {
    const {id} = req.params;
    const deletedByCarId = await carsService.deleteCar({id});

    res.redirect("/");
}

module.exports = {getAll, create, update, getById, deleteCar,  renderUpdateById, renderHomePage};