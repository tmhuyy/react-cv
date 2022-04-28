const mongoose = require("mongoose");
// authorSchema
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        }
    ]
})
// bookSchema
const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    publishDate: {
        type: String
    },
    genres: {
        type: [String]
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Author"
    }
});
const Book = mongoose.model("Book", bookSchema);
const Author = mongoose.model("Author", authorSchema)
module.exports = { Book, Author };