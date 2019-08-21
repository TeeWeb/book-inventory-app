import { UPDATE_NEW_BOOK_TITLE,
  UPDATE_NEW_BOOK_AUTHOR,
  UPDATE_NEW_BOOK_ISBN,
  UPDATE_NEW_BOOK_QTY } from '../constants'

export const updateNewBookTitle = (value) => ({
  type: UPDATE_NEW_BOOK_TITLE,
  value
})

export const updateNewBookAuthor = (value) => ({
  type: UPDATE_NEW_BOOK_AUTHOR,
  value
})

export const updateNewBookIsbn = (value) => ({
  type: UPDATE_NEW_BOOK_ISBN,
  value
})

export const updateNewBookQty = (value) => ({
  type: UPDATE_NEW_BOOK_QTY,
  value
})