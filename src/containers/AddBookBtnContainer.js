import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AddBookBtn from '../components/AddBookBtn'

import { addNewBook } from '../actions/bookshelf-actions.js'

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addNewBook
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddBookBtn)