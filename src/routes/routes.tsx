import App from "@/App";
import AddTodo from "@/pages/todos/AddTodo";
import ShowTodos from "@/pages/todos/ShowTodos";
import Todo from "@/pages/todos/Todo";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Todo /> },
      { path: "/add-todo", element: <AddTodo /> },
      { path: "/show-todo", element: <ShowTodos /> },
    ],
  },
]);

export default routes;
