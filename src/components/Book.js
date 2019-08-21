import React from 'react'
import PropTypes from 'prop-types'

import './Book.css'

export default class Book extends React.Component {
  render() {
    const { checkedOut, id, title, author, isbn, qty, onCheckOut, onCheckIn, onRemove} = this.props

    return (
      <article className="book" id={id}>
        <button className="book-checkout-btn" onClick={onCheckOut}>Check In</button>
        <div className="book-title">{title}</div>
        <div className="book-author">{author}</div>
        <div className="book-isbn">{isbn}</div>
        <div className="book-qty">{qty} in stock</div>
        <button className="book-remove" onClick={onRemove}>Remove</button>
      </article>
    )
  }
}

// Book.propTypes = {
//   checkedOut: PropTypes.bool,
//   id: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
//   isbn: PropTypes.string.isRequired,
//   qty: PropTypes.number.isRequired,
//   onCheckOut: PropTypes.func.isRequired,
//   onCheckIn: PropTypes.func.isRequired,
//   onRemove: PropTypes.func.isRequired
// }

// Book.defaultProps = {
//   checkedOut: false
// }