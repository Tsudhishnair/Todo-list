import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  TOGGLE_ADD_TODO_MODAL
} from "../Action/actionTypes";
// intial state of the todo application
const initialState = {
  allids: [],
  byIds: {},
  toggleModal: false
};
//switch reducer function to handle add & toggle state of the todo.
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allids: [...state.allids, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    case TOGGLE_ADD_TODO_MODAL: {
      return {
        ...state,
        toggleModal: !state.toggleModal
      };
    }
    default:
      return state;
  }
}
