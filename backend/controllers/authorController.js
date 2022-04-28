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
            const author = await Author.findById(authorId).populate("books");
            res.status(200).json(author)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // UPDATE AN AUTHOR 
    updateAnAuthor: async (req,res) => { 
        try {
            const authorId = req.params.id;
            const updatedAuthor = await Author.findByIdAndUpdate(authorId, req.body, { new: true });
            res.status(200).json(updatedAuthor);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // DELETE AN AUTHOR
    deleteAuthor: async(req, res) => {
        try {
            const authorId = req.params.id;
            await Author.findByIdAndDelete(authorId);
            await Book.updateMany({ author: authorId }, {$set: {author: null}})
            res.status(200).json("Deleted successfully");
        } catch (err) {
            res.status(500).json(err);
        }
    }
}
module.exports = authorController