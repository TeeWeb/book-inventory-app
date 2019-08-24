import { connect } from 'react-redux'

import {
  sortBooksAlphabetically,
} from '../actions/bookshelf-actions'

import Sort from '../components/Sort';

const mapStateToProps = ({ books }) => {
  return ({
    books: books
  })
}

const mapDispatchToProps = (dispatch) => ({
  onAlphaSort(books) {
    console.log(books)
    const compare = (a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      let comparison = 0;
      if (titleA > titleB) {
        comparison = 1;
      } else if (titleB > titleA) {
        comparison = -1;
      }
      return comparison
    }
    const sorted = books.sort(compare)
    dispatch(sortBooksAlphabetically(sorted))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Sort)