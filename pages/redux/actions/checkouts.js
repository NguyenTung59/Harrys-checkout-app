import * as types from '../types'

//get checkout
export const getCheckout = (method) => ({
  type: types.GET_CHECKOUT,
  payload: method
})

// add contact
export const addContact = (contact) => ({
  type: types.ADD_CONTACT,
  payload: contact
})

export const addShipping = (ship) => ({
  type: types.ADD_SHIPING,
  payload: ship
})

// add payment
export const addPayment = (payment) => ({
  type: types.ADD_PAYMENT,
  payload: payment
})