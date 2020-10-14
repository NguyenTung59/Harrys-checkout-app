import {combineReducers} from 'redux'
import CheckoutReducer from './checkoutReducer'
import ProductReducer from './addProduct'
import CartReducer from './addToCart'
import AppReducer from './app'

const rootReducer = combineReducers({
  app: AppReducer,
  checkout: CheckoutReducer,
  products: ProductReducer,
  carts: CartReducer
})

export default rootReducer;