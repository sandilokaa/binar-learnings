const express = require("express");
const app = express();
const PORT = 2000;

app.use(express.json());

const usersController = require("./controllers/usersController");

app.get("/sequelize/users", usersController.getAll);
app.post("/sequelize/create", usersController.create);

app.listen(PORT, () => {
    console.log(`Server listen on http://localhost:${PORT}`);
});