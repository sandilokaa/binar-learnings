const booksRepository = require("../repositories/booksRepository");

class BooksService {

    static async getAll({title}){
        const getAllBooks = await booksRepository.getAll({title});
        return getAllBooks;
    }

    static async getById({id}){
        const getByBooksId = await booksRepository.getById({id});
        return getByBooksId;
    }
}

module.exports = BooksService;