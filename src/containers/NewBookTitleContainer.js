import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import NewBook from '../components/Input'
import { updateNewBookTitle } from '../actions/new-book-actions'

const mapStateToProps = ({ newBook }) => ({
    value: newBook.title,
    placeholder: "Title"
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateNewBookTitle,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewBook)