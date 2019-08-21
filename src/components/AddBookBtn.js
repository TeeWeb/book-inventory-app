import React, { Component } from 'react'

export default class AddBookBtn extends Component {
  

  render() {
    return (
      <button className="new-book-submit button" type="submit" onClick={this.handleSubmit}>Add Book</button>
    )
  }
}