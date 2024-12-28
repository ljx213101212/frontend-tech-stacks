import { ADD_TODO, FETCH_TODOS, SET_TODOS, REMOVE_TODO } from './actionTypes';

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text,
});

export const fetchTodos = () => ({
  type: FETCH_TODOS, //saga
});

export const setTodos = (todos: string[]) => ({
  type: SET_TODOS,
  payload: todos,
});

export const removeTodo = (index: number) => ({
  type: REMOVE_TODO,
  payload: index,
});
