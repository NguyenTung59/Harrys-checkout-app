import * as types from '../types'

const initState = { currentProduct: { imgUrl: []}, currentImage: ''}

const AppReducer = (state = initState, action ) => {
  switch (action.type) {
    case types.GET_DATA:
      return {
        ...state,
        currentProduct: {...state.currentProduct.imgUrl, ...action.payload}
      }
      break;
    case types.CHANGE_IMAGE:
      return {
        ...state,
        currentImage: action.payload
      }
      break;
    default:
      return state;
      break;
  }
}

export default AppReducer