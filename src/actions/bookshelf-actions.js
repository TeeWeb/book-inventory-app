import uniqueId from 'lodash/uniqueId'
import { ADD_NEW_BOOK, 
  CHECK_OUT_BOOK, 
  CHECK_IN_BOOK, 
  SORT_BOOKS_ALPHABETICALLY, 
  REMOVE_BOOK, 
  EDIT_BOOK } from '../constants'

export const addNewBook = (title, author, isbn, qty) => ({
  type: ADD_NEW_BOOK,
  id: uniqueId(),
  checkedOut: false,
  title,
  author,
  isbn,
  qty
})