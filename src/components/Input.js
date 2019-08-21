import React from 'react'

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

  handleSubmit = event => {
    event.preventDefault();
    const { value }  = this.props;
    this.props.addNewBook(value);
  }

  render() {
    const { title, author, ibsn, qty } = this.props

    return (
      <form className="new-book" onSubmit={this.handleSubmit}>
        <input className="new-book-input" 
          type="text" 
          value={title} 
          placeholder="Title"
          onChange={this.handleChange} />
        <input className="new-book-input" 
          type="text" 
          value={author} 
          placeholder="Author"
          onChange={this.handleChange} />
        <input className="new-book-input" 
          type="text" 
          value={ibsn} 
          placeholder="ISBN"
          onChange={this.handleChange} />
        <input className="new-book-input" 
          type="text" 
          value={qty} 
          placeholder="Quantity"
          onChange={this.handleChange} />
        <input className="new-book-submit button" type="submit" value="Add Book" ></input>
      </form>
    )
  }
}

