import { UPDATED_NEW_BOOK_TITLE,
  UPDATED_NEW_BOOK_AUTHOR,
  UPDATED_NEW_BOOK_ISBN,
  UPDATED_NEW_BOOK_QTY } from '../constants'

export const updateNewBookTitle = (payload) => ({
  type: UPDATED_NEW_BOOK_TITLE,
  payload
})

export const updateNewBookAuthor = (payload) => ({
  type: UPDATED_NEW_BOOK_AUTHOR,
  payload
})

export const updateNewBookIsbn = (payload) => ({
  type: UPDATED_NEW_BOOK_ISBN,
  payload
})

export const updateNewBookQty = (payload) => ({
  type: UPDATED_NEW_BOOK_QTY,
  payload
})