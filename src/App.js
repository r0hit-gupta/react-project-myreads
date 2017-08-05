import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Shelf from './Shelf';
import Search from './Search';

import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route path="/search" component={Search} />
          <Route exact path="/" component={Shelf} />
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
