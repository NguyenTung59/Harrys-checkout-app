import * as types from '../types'

const initState = {listProducts: []}

const ProductReducer = (state = initState, action ) => {
  switch (action.type) {
    case types.ADD_PRODUCT:
      return {
        ...state,
        listProducts: [...state, ...action.payload]
      }
      break;
    default:
      return state;
      break;
  }
}

export default ProductReducer