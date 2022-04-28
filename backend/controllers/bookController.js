const { Author, Book } = require("../model/model");
const mongoose = require("mongoose");

const bookController = {
    // ADD BOOK
    addBook: async (req, res) => {
        try {
            const newBook = new Book(req.body);
            const savedBook = await newBook.save();
            if (req.body.author) {
                const authorId = req.body.author
                const findAuthor = await Author.findByIdAndUpdate(authorId, {$push: {books: savedBook._id}})
            }
            res.status(200).json(savedBook);
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //  GET ALL BOOK
    getAllBook: async (req, res) => {
        try {
            const books = await Book.find();
            res.status(200).json(books);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //  GET A BOOK
    getABook: async (req, res) => {
        try {
            const bookId = req.params.id;
            const book = await Book.findById(bookId).populate("author");
            res.status(200).json(book);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

module.exports = bookController;