const express = require('express');
const router = express.Router(); 
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/bookDB", {useNewUrlParser: true}); //connect to mongdb database
const bodyParser = require('body-parser');

const Book = require('../../model/Book.js'); //Load Book model

router.use(bodyParser.urlencoded({extended: true}));

router.get("/", function(req, res){ //Find all books in database
  Book.find(function(err, books){
    if (!err) {
      res.json(books);
    } else {
      res.status(404).json({msg: "No books found."});
    }
  });
});

router.get("/:id", function(req, res){ //Find a specific book with id
  Book.find({_id: req.params.id}, function(err, book){
    if (!err) {
      res.json(book);
    } else {
      res.status(404).json({msg: "No book found."});
    }
  });
});

router.post("/", function(req, res){ //Add book to database
  Book.create(req.body, function(err){
    if (!err) {
      res.json({msg: "Book added successfully."});
    } else {
      res.status(400).json({msg: "Unable to create book."});
    }
  });
});

router.put("/:id", function(req, res){ //Modifiy book in database
  Book.findOneAndUpdate({_id: req.params.id}, req.body, function(err){
    if (!err) {
      res.json({msg: "Book updated successfully."});
    } else {
      res.status(400).json({msg: "Unable to update book."});
    }
  });
});

router.delete("/:id", function(req, res){ //Delete book
  Book.deleteOne({_id: req.params.id}, function(err){
    if (!err) {
      res.json({msg: "Book successfully deleted."});
    } else {
      res.status(400).json({msg: "Unable to delete book"});
    }
  });
});

module.exports = router;
