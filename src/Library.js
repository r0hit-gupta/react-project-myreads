import React from 'react';
import { Link } from 'react-router-dom';

import Shelf from './Shelf';

import * as BooksAPI from './BooksAPI';
import './App.css';

class Library extends React.Component {
  state = {
    books: [],
    loading: true
  };

  getAllBooks = () => {
    BooksAPI.getAll().then(books => {
      console.log(books);
      this.setState({
        books,
        loading: false
      });
    });
  };

  componentDidMount() {
    this.getAllBooks();
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              title="Currently Reading"
              loading={this.state.loading}
              books={this.state.books.filter(
                x => x.shelf === 'currentlyReading'
              )}
              updateLibrary={this.getAllBooks}
            />

            <Shelf
              title="Want to Read"
              loading={this.state.loading}
              books={this.state.books.filter(x => x.shelf === 'wantToRead')}
              updateLibrary={this.getAllBooks}
            />

            <Shelf
              title="Read"
              loading={this.state.loading}
              books={this.state.books.filter(x => x.shelf === 'read')}
              updateLibrary={this.getAllBooks}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Library;
