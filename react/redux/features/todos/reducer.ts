
import { TodoState } from '@/redux/store/types';
import { ADD_TODO, REMOVE_TODO, SET_TODOS } from './actionTypes';

const initialState: TodoState = {
    todos: [],
  };
  
  const todoReducer = (state = initialState, action: any): TodoState => {
    switch (action.type) {
      case ADD_TODO:
        return { ...state, todos: [...state.todos, action.payload] };
      case SET_TODOS:
        return { ...state, todos: action.payload };
      case REMOVE_TODO:
        return {
          ...state,
          todos: state.todos.filter((_, index) => index !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;