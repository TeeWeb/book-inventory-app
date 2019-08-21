import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import NewBook from '../components/Input'
import { updateNewBookQty } from '../actions/new-book-actions'

const mapStateToProps = ({ newBookQty }) => {
  return {
    value: newBookQty,
    placeholder: "Quantity",
    type: "number"
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateNewBookQty,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewBook)