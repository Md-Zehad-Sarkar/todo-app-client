import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type TTodos = {
  id?: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  status?: string;
};

type TInitialTodoState = {
  todos: TTodos[];
};

const initialTodo: TInitialTodoState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todos",
  initialState: initialTodo,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodos>) => {
      state.todos.push(action.payload);
    },
    toggleCompleted: (state, action: PayloadAction<string>) => {
      const toggledItem = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (toggledItem) {
        toggledItem.isCompleted = !toggledItem.isCompleted;
      }
      state.todos.sort((a, b) => (a.isCompleted===b.isCompleted ? 0 : a.isCompleted ? 1 : -1));
    },
  },
});

export const { addTodo, toggleCompleted } = todoSlice.actions;
export default todoSlice.reducer;
