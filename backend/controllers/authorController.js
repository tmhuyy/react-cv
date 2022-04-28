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
    getAllAuthor: async (req, res) => {
        try {
            const authors = await Author.find();
            res.status(200).json(authors)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}
module.exports = authorController