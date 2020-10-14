import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/rootReducer'

const saveToLocalStrorage = state => {
  try {
    const localState = JSON.stringify(state);
    localStorage.setItem('state', localState)
  } catch (error) {
      console.log(error)
  }
}

const store = createStore(rootReducer)

store.subscribe(() => saveToLocalStrorage(store.getState()))

// console.log("store: State", store.getState())

export default store