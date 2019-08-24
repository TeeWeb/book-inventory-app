import { connect } from 'react-redux'

import {
  updateSearchTerm
} from '../actions/bookshelf-actions'

import Search from '../components/Search';

const mapStateToProps = ({ value }) => {
  return ({
    value
  })
}

const mapDispatchToProps = (dispatch) => ({
  onUpdateSearch(value) {
    dispatch(updateSearchTerm(value))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)