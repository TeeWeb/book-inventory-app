import { connect } from 'react-redux'
import Books from '../components/Books'

import {
  checkOutBook,
  checkInBook,
  removeBook,
  sortBooksAlphabetically } from '../actions/bookshelf-actions'

const mapStateToProps = ({ books, search }) => {
  if (!search.value) {
    return { 
      books: books.filter(book => book.isCheckedOut)
    }
  } else {
    return { 
      books: books.filter(book => book.isCheckedOut && 
        book.title.toLowerCase().includes(search.value))
    }
  }  
}

const mapDispatchToProps = (dispatch) => ({
  onCheckIn(id) {
    dispatch(checkInBook(id))
  },
  onCheckOut(id) {
    dispatch(checkOutBook(id))
  },
  onRemove(id) {
    dispatch(removeBook(id))
  },
  onAlphaSort(books) {
    dispatch(sortBooksAlphabetically(books))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Books)