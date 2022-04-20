const express = require("express");
const app = express();
const PORT = 2000;

app.use(express.json());

const booksController = require("./controllers/booksController");

app.get("/books", booksController.getAll);

app.listen(PORT, () => {
    console.log(` Server listen on http://localhost:${PORT}`);
});