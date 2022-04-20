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

    static async create({title, author, price}){
        const createdBookData = await booksRepository.create({
            title, 
            author, 
            price
        });
        return createdBookData;
    }

    static async update({id, title, author, price}){
        const updatedBookById = await booksRepository.update({
            id, 
            title, 
            author, 
            price
        });
        return updatedBookById;
    }

    static async deleteData({id}){
        const deletedByBookId = await booksRepository.deleteData({id});
        return deletedByBookId;
    }
}

module.exports = BooksService;