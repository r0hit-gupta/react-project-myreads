import React from 'react';

import Book from './Book';
import Spinner from './Spinner';

import * as BooksAPI from './BooksAPI';
import './App.css';

class Shelf extends React.Component {
  updateBook = (id, shelf) => {
    BooksAPI.update(id, shelf).then(data => {
      console.log(data);
      this.props.updateLibrary();
    });
  };

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.loading && <Spinner />}
            {this.props.books.map(book =>
                <Book
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.authors}
                  cover={book.imageLinks.smallThumbnail}
                  shelf={book.shelf}
                  updateBook={this.updateBook}
                />)}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
