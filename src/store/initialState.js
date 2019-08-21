import uniqueId from 'lodash/uniqueId';
import PropTypes from 'prop-types'

const books = [
  { title: 'Pants', id: uniqueId(), checkedOut: false, author: 'J.K. Rowling', isbn: '12345', qty: 2 },
  { title: 'Jacket', id: uniqueId(), checkedOut: false, author: 'J.K. Rowling', isbn: '12345', qty: 2 },
  { title: 'iPhone Charger', id: uniqueId(), checkedOut: false, author: 'J.K. Rowling', isbn: '12345', qty: 2 },
  { title: 'MacBook', id: uniqueId(), checkedOut: false, author: 'J.K. Rowling', isbn: '12345', qty: 2 },
  { title: 'Sleeping Pills', id: uniqueId(), checkedOut: true, author: 'J.K. Rowling', isbn: '12345', qty: 2 },
  { title: 'Underwear', id: uniqueId(), checkedOut: false, author: 'J.K. Rowling', isbn: '12345', qty: 2 },
  { title: 'Hat', id: uniqueId(), checkedOut: false, author: 'J.K. Rowling', isbn: '12345', qty: 2 },
  { title: 'T-Shirts', id: uniqueId(), checkedOut: false, author: 'J.K. Rowling', isbn: '12345', qty: 2 },
  { title: 'Belt', id: uniqueId(), checkedOut: false, author: 'J.K. Rowling', isbn: '12345', qty: 2 },
  { title: 'Passport', id: uniqueId(), checkedOut: true, author: 'J.K. Rowling', isbn: '12345', qty: 2 },
  { title: 'Sandwich', id: uniqueId(), checkedOut: true, author: 'J.K. Rowling', isbn: '12345', qty: 2 },
];

books.PropTypes = {
  title: PropTypes.string.isRequired,
  checkedOut: PropTypes.bool.isRequired,
  author: PropTypes.string.isRequired,
  isbn: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired
}

export default {
  books: {
    past: [],
    present: books,
    future: []
  },
  filter: {
    checkedOutBooksFilter: '',
    checkedInBooksFilter: '',
  },
  newBook: {
    id: {},
    title: '',
    author: '',
    isbn: '',
    qty: 0
  }
};