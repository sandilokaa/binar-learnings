const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 2000;

// Use Express.Js & body parser
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Import controller
const carsController = require("./controllers/carsController");
const carsService = require("./services/carsService");

// View
// Set View Engine
app.set("view engine", "ejs");

// Define Assets
app.use(express.static(__dirname + '/views'));

// ========= Render Page ====================

// Render Home
app.get("/", carsController.renderHomePage);

// Render Add Car Page
app.get("/add-car", async (req, res) => {
    res.render("add_car.ejs");
});

// Render Update Car Page
app.get("/update-car/:id", carsController.renderUpdateById);


// ========== Define Routes CRUD ===========================
app.get("/getAllCars", carsController.getAll);
app.post("/add-car/create", carsController.create);
app.post("/update-car/update/:id", carsController.update);
app.get("/getById/:id", carsController.getById);
app.post("/delete-car/:id", carsController.deleteCar);

app.listen(PORT, () => {
    console.log(`Server listen on http://localhost:${PORT}`);
})