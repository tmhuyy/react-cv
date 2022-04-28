const { Author, Book } = require("../model/model");
// keep track all author controller
const authorController = {
    // ADD AUTHOR
    addAuthor: async (req, res) => {
        try {
            const newAuthor = new Author(req.body);
            const savedAuthor = await newAuthor.save();
            res.status(200).json(savedAuthor);
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // GET ALL AUTHOR
    getAllAuthor: async (req, res) => {
        try {
            const authors = await Author.find();
            res.status(200).json(authors)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // GET AN AUTHOR
    getAnAuthor: async (req, res) => {
        try {
            const authorId = req.params.id;
            const author = await Author.findById(authorId);
            res.status(200).json(author)
        } catch (err) {
            res.status(500).json(err);
        }
    }
}
module.exports = authorController