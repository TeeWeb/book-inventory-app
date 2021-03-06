import React from 'react'

import './Input.css'

export default class NewBook extends React.Component {
  handleChange = event => {
    const value = event.target.value;
    switch (event.target.placeholder) {
      case 'Title':
        this.props.updateNewBookTitle(value)
        break
      case 'Author':
        this.props.updateNewBookAuthor(value)
        break
      case 'ISBN':
        this.props.updateNewBookIsbn(value)
        break
      case 'Quantity':
        this.props.updateNewBookQty(value)
        break
      default:
        return;
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, author, isbn, qty }  = this.props;
    for (let i = 0; i < qty; i++) {
      this.props.addNewBook(title, author, isbn);
    }
  }

  render() {
    const { title, author, isbn, qty } = this.props
    return (
      <form className="new-book" onSubmit={this.handleSubmit}>
        <input className="new-book-input" 
          type="text" 
          title={title} 
          placeholder="Title"
          onChange={this.handleChange} />
        <input className="new-book-input" 
          type="text" 
          author={author} 
          placeholder="Author"
          onChange={this.handleChange} />
        <input className="new-book-input" 
          type="text" 
          isbn={isbn} 
          placeholder="ISBN"
          onChange={this.handleChange} />
        <input className="new-book-input" 
          type="text" 
          qty={qty} 
          placeholder="Quantity"
          onChange={this.handleChange} />
        <input className="new-book-submit button" type="submit" value="Add Book" ></input>
      </form>
    )
  }
}

