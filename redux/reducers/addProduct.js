import * as types from '../types'

const initState = {listProducts: {}, imgUrl: []}

const ProductReducer = (state = initState, action ) => {
  switch (action.type) {
    case types.ADD_PRODUCT:
      return {
        ...state,
        listProducts: {...action.payload}
      }
      break;
    case types.ADD_IMAGE: 
      return {
        ...state,
        imgUrl: [...state.imgUrl, ...action.payload]
      }
    case types.UPDATE_IMAGE: 
      return {
        ...state,
        imgUrl: [...action.payload]
      }
    default:
      return state;
      break;
  }
}

export default ProductReducer