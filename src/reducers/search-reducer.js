import {
  SORTED_BOOKS_ALPHABETICALLY,
  UPDATED_SEARCH_TERM
} from '../constants'

export default function(state = '', action) {
  switch (action.type) {
    case UPDATED_SEARCH_TERM:
      console.log(action)
      return { ...state, value: action.payload }
    case SORTED_BOOKS_ALPHABETICALLY:  
      console.log(action)
      return { state } = action.payload
    default:
      return state
  }
}