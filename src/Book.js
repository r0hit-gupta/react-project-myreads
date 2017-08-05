import React from 'react';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shelf: this.props.shelf };
  }
  updateBook = event => {
    const newShelf = event.target.value;
    this.props.updateBook(this.props.id, newShelf);
    this.setState({
      shelf: newShelf
    });
  };
  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${this.props.cover})`
              }}
            />
            <div className="book-shelf-changer">
              <select value={this.state.shelf} onChange={this.updateBook}>
                <option disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">
            {this.props.title}
          </div>
          <div className="book-authors">
            {this.props.author}
          </div>
        </div>
      </li>
    );
  }
}

export default Book;
