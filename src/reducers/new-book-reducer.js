import { UPDATE_NEW_BOOK_TITLE,
  UPDATE_NEW_BOOK_AUTHOR,
  UPDATE_NEW_BOOK_ISBN,
  UPDATE_NEW_BOOK_QTY } from '../constants'

export default function(state = '', action) {
  switch (action.type) {
    case UPDATE_NEW_BOOK_TITLE: 
      return action.value;
    case UPDATE_NEW_BOOK_AUTHOR: 
      return action.value;
    case UPDATE_NEW_BOOK_ISBN: 
      return action.value;
    case UPDATE_NEW_BOOK_QTY:
      return action.value;
    default:
      return state;
  }
}