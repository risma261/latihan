// cara redux biasa
export const TODO_CONSTANTS = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  REMOVE_TODO: "REMOVE_TODO"
};

function todosReducer(state = [], action) {
  switch (action.type) {
    case TODO_CONSTANTS.ADD_TODO: {
      return state.concat(action.payload);
    }
    case TODO_CONSTANTS.TOGGLE_TODO: {
      const { index } = action.payload;
      return state.map((todo, i) => {
        if (i !== index) return todo;

        return {
          ...todo,
          completed: !todo.completed
        };
      });
    }
    // sama dengan ini
    case "REMOVE_TODO": {
      return state.filter((todo, i) => i !== action.payload.index);
    }
    default:
      return state;
  }
}
export default todosReducer;
