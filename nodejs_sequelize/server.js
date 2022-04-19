const express = require("express");
const app = express();
const PORT = 2000;

app.use(express.json());

// Import Controller
const usersController = require("./controllers/usersController");

// Define Routes

// Get All Users
app.get("/sequelize/users", usersController.getAll);

// Create User
app.post("/sequelize/create", usersController.create);

// Get By Id
app.get("/sequelize/users/:id", usersController.getById);

// Update Data



app.listen(PORT, () => {
    console.log(`Server listen on http://localhost:${PORT}`);
});