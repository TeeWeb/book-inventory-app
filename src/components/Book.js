import React from 'react'

import './Book.css'

export default class Book extends React.Component {
  render() {
    const { id, title, author, isbn, onCheckOut, onCheckIn, onRemove } = this.props

    return (
      <article className="book" id={id} >
        <div className="book-info">
          <div className="book-title">{title}</div>
          <div className="book-author">{author}</div>
          <div className="book-isbn">ISBN: {isbn}</div>
          <button className="btn toolbar-checkout" onClick={onCheckOut} >Check Out</button>
          <button className="btn toolbar-checkin" onClick={onCheckIn}>Check In</button>
          <button className="btn toolbar-remove" onClick={onRemove}>Remove</button>
        </div>
      </article>
    )
  }
}