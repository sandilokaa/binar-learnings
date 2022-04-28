const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 2000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Import Controllers
const authController = require("./controllers/authController");
const shopsController = require("./controllers/shopsController");
const productsController = require("./controllers/productsController");

// Import Middlewares
const middleware = require("./middlewares/auth");


// Define Routes
//Auth (Shops)
app.post("/auth/register", authController.register);
app.post("/auth/login", authController.login);
app.put("/shop/:id", middleware.authenticate, shopsController.updateByID);

// Products
app.post("/products/create", middleware.authenticate, productsController.create);
app.put("/products/:id", middleware.authenticate, productsController.updateByID);
app.delete("/products/:id", middleware.authenticate, productsController.deleteByID);

app.get("/shops/:id/products", shopsController.getProductsByID);

app.listen(PORT, () => {
    console.log(`Server listen on http://localhost:${PORT}`);
});
