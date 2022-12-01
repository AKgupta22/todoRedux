import rootReducer from './Reducers'
import { createStore } from 'redux'
const Store = createStore(rootReducer)
export default Store