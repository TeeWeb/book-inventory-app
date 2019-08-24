import React from 'react'
import Book from './Book'

import './Books.css'

export default class Books extends React.Component {
  render() {
    const { title, books, onCheckOut, onCheckIn, onRemove, onEdit, } = this.props

    return(
      <section className="bookshelf">
        <header>
          <h2>{title}</h2>
          <p>{books.length} books</p>
        </header>
        <div className="books">
          {books.map(book => (
            <Book key={book.id} 
              onCheckOut={() => onCheckOut(book.id)}
              onCheckIn={() => onCheckIn(book.id)}
              onEdit={() => onEdit(book.id)}
              onRemove={() => onRemove(book.id)}
              {...book}
            />
          ))}
        </div>
      </section>
    )
  }
}