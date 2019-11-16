import {
  ADD_TODO,
  DELETE_TODO,
  SET_FILTER,
  TOGGLE_TODO,
  TOGGLE_ADD_TODO_MODAL
} from "./actionTypes";

//set the initial todo id to 0
let todoId = 0;

//aciton to add new todo item
export const addTodo = content => ({
  type: ADD_TODO,
  payload: { id: ++todoId, content }
});

//action to delete the todo item
export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: { id }
});

//action to filter the todo item
export const filterTodo = filter => ({
  type: SET_FILTER,
  payload: { filter }
});

//action to toggle the todo item to complete and incomplete
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const toggleModal = () => ({
  type: TOGGLE_ADD_TODO_MODAL,
  payload: {}
});
//action to search the todo item -> next phase implementation
