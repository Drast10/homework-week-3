import { createStore } from 'redux'
import reducer from './reducers'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, enhancer)
// console.log('Intial State:' , store.getState())
// store.subscribe(() => console.log('Next state:', store.getState()))
export default store