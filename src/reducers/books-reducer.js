import { ADD_NEW_BOOK } from '../constants'

export default function(state = {}, action) {
  console.log(action)
  switch (action) {
    case ADD_NEW_BOOK:
      const { id, title, author, isbn, qty, checkedOut} = action;
      return [...state, { id, title, author, isbn, qty, checkedOut }]
    default:
      return state
  }
}