import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import NewBook from '../components/Input'
import { updateNewBookIsbn } from '../actions/new-book-actions'

const mapStateToProps = ({ newBookIsbn }) => {
  return {
    value: newBookIsbn,
    placeholder: "ISBN"
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateNewBookIsbn,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewBook)