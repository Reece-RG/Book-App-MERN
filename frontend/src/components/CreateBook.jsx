import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function CreateBook() {
  const [book, setBook] = useState({
    title: "",
    isbn: "",
    author: "",
    description: "",
    publishedDate: "",
    publisher: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;
    setBook(function(prevValues){
      return ({
        ...prevValues,
        [name]: value
      });
    });
  };

  function handleClick(event) {
    axios.post("http://localhost:8000/api/books", book).then(function(res){
      window.location = "/";
    });
    event.preventDefault();
  };

  return (
        <div className="CreateBook">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <br />
                <Link to="/" className="btn btn-outline-warning float-left">
                    Show Book List
                </Link>
              </div>
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Add Book</h1>
                <p className="lead text-center">
                    Create new book
                </p>

                <form>
                  <div className='form-group'>
                    <input
                      type='text'
                      placeholder='Title of the Book'
                      name='title'
                      className='form-control'
                      value={book.title}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <br />

                  <div className='form-group'>
                    <input
                      type='text'
                      placeholder='ISBN'
                      name='isbn'
                      className='form-control'
                      value={book.isbn}
                      onChange={handleChange}
                    />
                  </div>

                  <div className='form-group'>
                    <input
                      type='text'
                      placeholder='Author'
                      name='author'
                      className='form-control'
                      value={book.author}
                      onChange={handleChange}
                    />
                  </div>

                  <div className='form-group'>
                    <input
                      type='text'
                      placeholder='Describe this book'
                      name='description'
                      className='form-control'
                      value={book.description}
                      onChange={handleChange}
                    />
                  </div>

                  <div className='form-group'>
                    <input
                      type='date'
                      placeholder='published_date'
                      name='publishedDate'
                      className='form-control'
                      value={book.publishedDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='text'
                      placeholder='Publisher of this Book'
                      name='publisher'
                      className='form-control'
                      value={book.publisher}
                      onChange={handleChange}
                    />
                  </div>

                  <input
                      type="submit"
                      className="btn btn-outline-warning btn-block mt-4"
                      onClick={handleClick}
                  />
                </form>
            </div>
            </div>
          </div>
        </div>
      );
}

export default CreateBook;
