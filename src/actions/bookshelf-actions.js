import uniqueId from 'lodash/uniqueId'
import { ADDED_NEW_BOOK, 
  CHECKED_OUT_BOOK, 
  CHECKED_IN_BOOK, 
  SORTED_BOOKS_ALPHABETICALLY, 
  REMOVED_BOOK, 
  EDITED_BOOK } from '../constants'

export const addNewBook = (title, author, isbn, qty) => ({
  type: ADDED_NEW_BOOK,
  id: uniqueId(),
  checkedOut: false,
  title,
  author,
  isbn,
  qty
})