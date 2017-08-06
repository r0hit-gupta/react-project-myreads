import React from 'react';
import { Link } from 'react-router-dom';

import Book from './Book';
import Spinner from './Spinner';

import * as BooksAPI from './BooksAPI';
import './App.css';

class Shelf extends React.Component {
  state = {
    books: [],
    loading: true
  };

  getAllBooks = () => {
    BooksAPI.getAll().then(books => {
      console.log(books);
      books = books.map(book => {
        return (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.authors}
            cover={book.imageLinks.smallThumbnail}
            shelf={book.shelf}
            updateBook={this.updateBook}
          />
        );
      });
      this.setState({
        books,
        loading: false
      });
    });
  };

  updateBook = (id, shelf) => {
    BooksAPI.update(id, shelf).then(data => {
      console.log(data);
      this.getAllBooks();
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
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.state.loading && <Spinner />}
                  {this.state.books.filter(
                    x => x.props.shelf === 'currentlyReading'
                  )}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.state.loading && <Spinner />}
                  {this.state.books.filter(x => x.props.shelf === 'wantToRead')}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.state.loading && <Spinner />}
                  {this.state.books.filter(x => x.props.shelf === 'read')}
                </ol>
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
