import * as types from '../types'

const initState = {list: [], isOpen: false, count: 0, currentProduct: {price: 0}}

const CartReducer = (state = initState, action ) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        currentProduct: {...action.payload}
      }
      break;
    case types.REMOVE_TO_CART:
      return {
        ...state,
        count: action.payload
      }
      break;
    case types.ACTION_OPEN_CART:
      return {
        ...state,
        isOpen: action.payload
      }
    case types.ACTION_CLOSE_CART:
      return {
        ...state,
        isOpen: action.payload
      }
    case types.DECREMENT_COUNT:
      return {
        ...state,
        count: action.payload
      }
    case types.INCREMENT_COUNT:
      return {
        ...state,
        count: action.payload
      }
    default:
      return state;
      break;
  }
}

export default CartReducer