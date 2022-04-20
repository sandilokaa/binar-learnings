const booksService = require("../services/booksService");

const getAll = async (req, res) => {
    const {title} = req.query;
    const getAllBooks = await booksService.getAll({title});

    res.status(200).send(getAllBooks);
}

const getById = async (req, res) => {
    const {id} = req.params;
    const getByBooksId = await booksService.getById({id});

    res.status(200).send(getByBooksId);
}

module.exports = {getAll, getById};