import { combineReducers } from "redux";
import Todo from './TodoRedures'
const rootReducer = combineReducers({
    Todo: Todo
})
export default rootReducer