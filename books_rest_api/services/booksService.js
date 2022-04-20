const booksRepository = require("../repositories/booksRepository");

class BooksService {

    static async getAll(){
        const getAllBooks = await booksRepository.getAll();
        return getAllBooks;
    }
}

module.exports = BooksService;