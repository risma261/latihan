import { createSelector, createSlice } from "@reduxjs/toolkit";
const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: []
  },
  reducers: {
    // life cycle function dari redux toolkit
    // addTodo: {
    //   reducer(state, action) {
    //     const { id, title } = action.payload;
    //     state.todo.push({ id, title, completed: false });
    //   }
    //   prepare(title) {
    //      return { payload: { text, id:nanoid() } };
    //   }
    // },
    addTodo(state, action) {
      const { payload } = action;
      state.todos.push({ ...payload, done: false });
    },
    toggleTodo(state, action) {
      const finnedTodo = state.todos.find(todo => todo.id === action.payload.id);
      const finnedTodoIndex = state.todos.findIndex(
        todo => todo.id === action.payload.id
      );
      if (finnedTodo) {
        finnedTodo.done = !finnedTodo.done;
      }
      // merubah todo
      state.todos[finnedTodoIndex] = finnedTodo;
    },
    removeTodo(state, action) {
      const finnedTodoIndex = state.todos.findIndex(
        todo => todo.id === action.payload.id
      );

      // menghapus satu todo yang ketemu
      state.todos.splice(finnedTodoIndex, 1);
    }
  }
});

const allTodo = state => {
  // ini dari nama reducernya file reducers.js
  return state.todosToolkitReducer.todos;
};

export const todoSelector = createSelector(allTodo, todos => todos);

// atau dengan cara kombinasi reducer lain
// export const todoSelector = createSelector([allTodo], todos => todos : []);

export default todosSlice.reducer;
export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;
