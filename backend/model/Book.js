const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({ //Creating new schema
  title: {
    type: String,
    required: true
  },
  isbn: String,
  author: String,
  description: String,
  publishedDate: String,
  publisher: String
});

const Book = mongoose.model("Book", bookSchema); //Creating model that incorporates the Schema

module.exports = Book;
