import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import NewBook from '../components/Input'
import { updateNewBookAuthor } from '../actions/new-book-actions'
import { addNewBook } from '../actions/bookshelf-actions'

const mapStateToProps = ({ newBookAuthor }) => {
  return {
    value: newBookAuthor,
    placeholder: "Author"
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateNewBookAuthor,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewBook)