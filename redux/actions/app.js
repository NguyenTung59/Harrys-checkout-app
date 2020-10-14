import * as types from "../types";

export const getData = (data) => ({
  type: types.GET_DATA,
  payload: data
})

export const addProduct = (product) => ({
  type: types.ADD_PRODUCT,
  payload: product
})

//count (button remove count)
export const incrementCount = (count) => ({
  type: types.INCREMENT_COUNT,
  payload: count
})
//count (button add to cart)
export const decrementCount = (count) => ({
  type: types.DECREMENT_COUNT,
  payload: count
})

//open cart 
export const openCart = (boolean) => ({
  type: types.ACTION_OPEN_CART,
  payload: boolean
})

export const closeCart = (boolean) => ({
  type: types.ACTION_CLOSE_CART,
  payload: boolean
})

export const addToCart = (product) => ({
  type: types.ADD_TO_CART,
  payload: product,
});

export const changeImage = (url) => ({
  type: types.CHANGE_IMAGE,
  payload: url
})