import * as types from '../types'

const initState = {
  contact: {},
  shipping: { address: "", shipping_method: "standard"},
  payment: {},
  changePage: false
}

const CheckoutReducer = (state = initState, action ) => {
  switch (action.type) {
    case types.GET_CHECKOUT:
      return{
        ...state,
        shipping: {...state.shipping, ...action.payload}
      }
    case types.ADD_CONTACT:
      return {
        ...state,
        contact: action.payload
      }
      break;
    case types.ADD_SHIPING:
      return {
        ...state,
        shipping: action.payload
      }
      break;
    case types.ADD_PAYMENT:
      return {
        ...state,
        payment: action.payload
      }
      break;
    default:
      return state;
      break;
  }
}

export default CheckoutReducer