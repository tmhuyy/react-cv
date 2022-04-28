const { Author, Book } = require("../model/model");
const mongoose = require("mongoose");

const bookController = {
    addBook: async (req, res) => {
        try {
            const newBook = new Book(req.body);
            const savedBook = await newBook.save();
            res.status(200).json(savedBook);
        } catch (err) {
            res.status(500).json(err)
        }
    }
};

module.exports = bookController;