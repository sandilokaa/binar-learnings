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

const create = async (req, res) => {
    const {title, author, price} = req.body;
    const createdBookData = await booksService.create({
        title, 
        author, 
        price
    });
    
    res.status(201).send(createdBookData); 
}

const update = async (req, res) => {
    const {id} = req.params;
    const {title, author, price} = req.body;

    const updatedBookById = await booksService.update({id, title, author, price});

    res.status(200).send(updatedBookById);
}

module.exports = {getAll, getById, create, update};