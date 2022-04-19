const express = require("express");
const app = express();
const PORT = 2000;

app.use(express.json());

// Import Controller
const usersController = require("./controllers/usersController");
const postsController = require("./controllers/postsController");

// Define Routes Users

// Get All Users
app.get("/sequelize/users", usersController.getAll);

// Create User
app.post("/sequelize/create", usersController.create);

// Get By Id
app.get("/sequelize/users/:id", usersController.getById);

// Update Data
app.put("/sequelize/users/update/:id", usersController.update);

// Delete Data
app.delete("/sequelize/users/delete/:id", usersController.deleteUsers);

// Define Routes Join Tables
app.get("/sequelize/users/:id/posts", usersController.getByUserId);


// Define Routes Posts

// Get All Posts
app.get("/sequelize/posts", postsController.getAll);

// Create Post
app.post("/sequelize/createpost", postsController.create);

// Update Data Post
app.put("/sequelize/posts/update/:id", postsController.update);

// Delete Data Post
app.delete("/sequelize/posts/delete/:id", postsController.deletePosts);

app.listen(PORT, () => {
    console.log(`Server listen on http://localhost:${PORT}`);
});