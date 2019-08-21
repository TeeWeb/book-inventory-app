import React, { Component } from 'react'

export default class AddBookBtn extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const { value }  = this.props;
    this.props.addNewBook(value);
  }

  render() {
    return (
      <button className="new-book-submit button" type="submit" onClick={this.handleSubmit}>Add Book</button>
    )
  }
}