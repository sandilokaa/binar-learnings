const booksService = require("../services/booksService");

const getAll = async (req, res) => {
    const getAllBooks = await booksService.getAll();

    res.status(200).send(getAll);
}

module.exports = {getAll};