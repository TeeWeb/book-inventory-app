import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import NewBook from '../components/Input'
import { updateNewBookTitle, 
  updateNewBookAuthor,
  updateNewBookIsbn,
  updateNewBookQty } from '../actions/new-book-actions'
import { addNewBook } from '../actions/bookshelf-actions'

const mapStateToProps = (newBook) => {
  console.log(newBook)
  return ({
    title: newBook.title,
    author: newBook.author,
    isbn: newBook.isbn,
    qty: newBook.qty
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateNewBookTitle,
    updateNewBookAuthor,
    updateNewBookIsbn,
    updateNewBookQty,
    addNewBook
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewBook)