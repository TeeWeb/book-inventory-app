import React from 'react'
import Book from './Book'

import './Books.css'

export default class Books extends React.Component {
  render() {
    const { title, books, onCheckout, onCheckIn, onRemove } = this.props
    console.log(books)
    return(
      <section className="bookshelf">
        <header>
          <h2>{title}</h2>
          <p>{books.length} books</p>
        </header>
        <div className="books">
          {books.map(book => (
            <Book key={book.id} 
              onCheckout={() => onCheckout(book.id)}
              onCheckIn={() => onCheckIn(book.id)}
              onRemove={() => onRemove(book.id)}
              {...book}
            />
          ))}
        </div>
      </section>
    )
  }
}