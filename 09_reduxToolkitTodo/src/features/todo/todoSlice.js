import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [{ id: 1, text: "test" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todo.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});


export const {addTodo,removeTodo} = todoSlice.action 