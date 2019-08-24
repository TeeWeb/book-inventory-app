import { ADDED_NEW_BOOK,
  CHECKED_IN_BOOK,
  CHECKED_OUT_BOOK,
  REMOVED_BOOK,
  SELECTED_BOOK } from '../constants'

export default function(state = {}, action) {
  switch (action.type) {
    case ADDED_NEW_BOOK:
      const { id, title, author, isbn, qty, isCheckedOut} = action
      return [...state, { id, title, author, isbn, qty, isCheckedOut } ]
    case CHECKED_IN_BOOK:
      return state.map(book => {
        if (book.id === action.payload) return { ...book, isCheckedOut: false }
        return book;
      })
    case CHECKED_OUT_BOOK:
      return state.map(book => {
        if (book.id === action.payload) return { ...book, isCheckedOut: true }
          return book;
      })
    case REMOVED_BOOK:
      return state.filter(book => book.id !== action.payload)
    case SELECTED_BOOK:
      return state.map(book => {
        return (book.id === action.id ? { ...book, isSelected: true} : {...book, isSelected: false })
      })
    default:
      return state
  }
}