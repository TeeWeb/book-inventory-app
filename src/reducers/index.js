import { combineReducers } from 'redux'

import books from './books-reducer'
import newBook from './new-book-reducer'
import search from './search-reducer'

export default combineReducers({
  books,
  newBook,
  search
})