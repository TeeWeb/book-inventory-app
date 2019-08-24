import uniqueId from 'lodash/uniqueId'
import { ADDED_NEW_BOOK, 
  CHECKED_OUT_BOOK, 
  CHECKED_IN_BOOK, 
  SORTED_BOOKS_ALPHABETICALLY, 
  REMOVED_BOOK, 
  UPDATED_SEARCH_TERM } from '../constants'

export const addNewBook = (title, author, isbn, qty) => ({
  type: ADDED_NEW_BOOK,
  id: uniqueId(),
  isCheckedOut: false,
  title,
  author,
  isbn,
  qty
})

export const checkOutBook = (payload) => ({
  type: CHECKED_OUT_BOOK,
  payload
})

export const checkInBook = (payload) => ({
  type: CHECKED_IN_BOOK,
  payload
})

export const sortBooksAlphabetically = (payload) => ({
  type: SORTED_BOOKS_ALPHABETICALLY,
  payload
})

export const removeBook = (payload) => ({
  type: REMOVED_BOOK,
  payload
})

export const updateSearchTerm = (payload) => ({
  type: UPDATED_SEARCH_TERM,
  payload
})