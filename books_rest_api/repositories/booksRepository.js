const generator = require("../utils/generator");

let booksData = [{
        id: 987637,
        title: "Buku 1",
        author: "Penulis 1",
        price: 1000,
    },
    {
        id: 357238,
        title: "Buku 2",
        author: "Penulis 2",
        price: 9000
    },
    {
        id: 157382,
        title: "Buku 3",
        author: "Penulis 3",
        price: 4000,
    },
];

class BooksRepository{

    static async getAll({title}){
        if(title){
            const filteredTitle = booksData.filter((t) => {
                if(t.title == title){
                    return title;
                }
            });
            booksData = filteredTitle;
        }
        return booksData;
    }

    static async getById({id}){
        const getByBooksId = booksData.filter((b) => {
            if(b.id == id){
                return id;
            }
        });
        return getByBooksId;
    }

    static async create({title, author, price}){
        const generatedId = await generator.generateID();

        booksData.push({
            id: generatedId,
            title,
            author,
            price
        });

        return {
            id: generatedId,
            title,
            author,
            price
        }
    }

    static async update({id, title, author, price}){
        let updatedBook = {};
        const updatedBookById = booksData.filter((u) => {
            if(u.id == id){
                u.title = title;
                u.author = author;
                u.price = price;

                updatedBook = {
                    id: u.id,
                    title: u.title,
                    author: u.author,
                    price: u.price
                }
            }
            return u;
        });

        booksData = updatedBookById;
        return updatedBook;
    }
}

module.exports = BooksRepository;