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
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
