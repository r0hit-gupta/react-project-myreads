import React from 'react';
import { Link } from 'react-router-dom';

import Book from './Book';
import Search from './Search';
import * as BooksAPI from './BooksAPI';
import './App.css';

class Shelf extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      console.log(books);
      books = books.map(book => {
        return (
          <Book
            key={book.id}
            title={book.title}
            author={book.authors[0]}
            cover={book.imageLinks.smallThumbnail}
            shelf={book.shelf}
          />
        );
      });
      console.log(books);
      this.setState({
        books
      });
      console.log(this.state.books);
    });
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.state.books}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid" />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid" />
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Shelf;
