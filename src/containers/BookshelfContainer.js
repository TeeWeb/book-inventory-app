import { connect } from 'react-redux'

import Books from '../components/Books'
import { checkOutBook,
  checkInBook,
  removeBook } from '../actions/bookshelf-actions'

const mapStateToProps = ({ books, search }) => {
  if (!search.value) {
    return { 
      books: books.filter(book => !book.isCheckedOut)
    }
  } else {
    return { 
      books: books.filter(book => !book.isCheckedOut && 
        book.title.toLowerCase().includes(search.value))
    }
  }  
}

const mapDispatchToProps = (dispatch) => ({
    onCheckOut(id) {
      dispatch(checkOutBook(id))
    },
    onCheckIn(id) {
      dispatch(checkInBook(id))
    },
    onRemove(id) {
      dispatch(removeBook(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Books)