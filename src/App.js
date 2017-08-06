import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Library from './Library';
import Search from './Search';

import './App.css';

class BooksApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route path="/search" component={Search} />
          <Route exact path="/" component={Library} />
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
