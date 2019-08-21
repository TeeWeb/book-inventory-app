import React from 'react'
import Book from './Book'

export default class Books extends React.Component {
  render() {
    console.log(books)
    const { title, books, onCheckout, onCheckIn, onRemove } = this.props

    return(
      <section className="bookshelf">
        <h2>{title} ({books.length})</h2>
        {books.map(book => (
          <Book key={book.id} 
            onCheckout={() => onCheckout(book.id)}
            onCheckIn={() => onCheckIn(book.id)}
            onRemove={() => onRemove(book.id)}
            {...book}
          />
        ))}
      </section>
    )
  }
}