import { UPDATED_NEW_BOOK_TITLE,
  UPDATED_NEW_BOOK_AUTHOR,
  UPDATED_NEW_BOOK_ISBN,
  UPDATED_NEW_BOOK_QTY } from '../constants'

export default function(state = '', action) {
  switch (action.type) {
    case UPDATED_NEW_BOOK_TITLE: 
      return {...state, title: action.payload}
    case UPDATED_NEW_BOOK_AUTHOR: 
      return {...state, author: action.payload}
    case UPDATED_NEW_BOOK_ISBN: 
      return { ...state, isbn: action.payload}
    case UPDATED_NEW_BOOK_QTY:
      return {...state, qty: action.payload}
    default:
      return state;
  }
}