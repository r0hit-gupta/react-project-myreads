import React from 'react';
import { Link } from 'react-router-dom';

import Book from './Book';
import Spinner from './Spinner';

import * as BooksAPI from './BooksAPI';
import './App.css';

class Search extends React.Component {
  state = {
    books: [],
    resultFound: true,
    loading: false
  };

  updateBook = (id, shelf) => {
    BooksAPI.update(id, shelf).then(data => {
      console.log(data);
    });
  };

  searchBook = event => {
    const query = event.target.value.trim();
    if (query) {
      this.setState({
        loading: true,
        resultFound: true,
        books: []
      });
      BooksAPI.search(query, 20).then(books => {
        console.log(books);
        if (books.error) {
          this.setState({
            resultFound: false,
            books: [],
            loading: false
          });
        } else {
          books = books.map((book, i) =>
            <Book
              key={i}
              id={book.id}
              title={book.title}
              author={book.authors}
              cover={book.imageLinks.smallThumbnail}
              shelf={book.shelf}
              updateBook={this.updateBook}
            />
          );
          this.setState({
            resultFound: true,
            loading: false,
            books
          });
        }
      });
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.searchBook}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.loading && <Spinner />}
            {!this.state.resultFound &&
              <span>
                No result found. Please try again with some other query.
              </span>}
            {this.state.books}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
