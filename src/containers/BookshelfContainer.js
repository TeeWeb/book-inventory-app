import { connect } from 'react-redux'
import bindActionCreators from 'redux'

import Books from '../components/Books'
import { checkOutBook, 
  checkInBook, 
  sortBooksAlphabetically, 
  removeBook, 
  editBook } from '../actions/bookshelf-actions'

const mapStateToProps = () => {
  
}

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Books)