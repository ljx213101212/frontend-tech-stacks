import { combineReducers } from 'redux';
import todosReducer from "@/redux/features/todos/reducer";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;