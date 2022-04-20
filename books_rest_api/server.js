const express = require("express");
const app = express();
const PORT = 2000;

app.use(express.json());

const booksController = require("./controllers/booksController");

app.get("/books", booksController.getAll);
app.get("/books/:id", booksController.getById);
app.post("/books/create", booksController.create);
app.put("/books/update/:id", booksController.update);
app.delete("/books/delete", booksController.deleteData);

app.listen(PORT, () => {
    console.log(` Server listen on http://localhost:${PORT}`);
});