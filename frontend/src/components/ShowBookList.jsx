import React, {useEffect, useState} from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import BookCard from './BookCard.jsx';

function ShowBookList () {

const [books, setBooks] = useState([]); //hook into books array

useEffect(function(){
  axios
    .get("http://localhost:8000/api/books") //GET request for book data
    .then(function(res){
    setBooks(res.data); //fill books array with received data
  })
    .catch(function(err) {
      console.log("Error in ShowBookList!");
  });
});

return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Books List</h2>
            </div>
            <div className="col-md-11">
              <Link to="/create-book" className="btn btn-outline-warning float-right">
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>
          <div className="list">
          {books.map(function(book, index) { //render every book in array via BookCard template
            return (
            <BookCard
              key={index}
              id={index}
              book={book}
            />
          );
          })}
          </div>
        </div>
      </div>
    );
}
export default ShowBookList;
