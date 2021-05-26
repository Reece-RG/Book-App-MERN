import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook.jsx';
import ShowBookList from './components/ShowBookList.jsx';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookDetails from './components/UpdateBookDetails';

function App() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowBookList} />
          <Route path='/create-book' component={CreateBook} />
          <Route path='/show-book/:id' component={ShowBookDetails} />
          <Route path='/edit-book/:id' component={UpdateBookDetails} />
        </div>
      </Router>
    );
  }

export default App;
