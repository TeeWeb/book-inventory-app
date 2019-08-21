import { connect } from 'react-redux'
import bindActionCreators from 'redux'

import Books from '../components/Books'
import { checkOutBook, 
  checkInBook, 
  sortBooksAlphabetically, 
  removeBook, 
  editBook } from '../actions/bookshelf-actions'

const mapStateToProps = ({ books }) => {
  console.log(books.present)
  return { 
    title: 'Bookshelf',
    books: books.present.filter(book => !book.checkedOut) 
  }
}

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Books)