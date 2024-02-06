import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoFilter from "./TodoFilter";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div className="rounded-md bg-navbar-gradient">
      <div className="flex items-center justify-between py-2">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="w-full h-full bg-purple-400">
        <div className="grid grid-cols-12 py-2 bg-red-400 justify-items-center">
          <h3 className="col-span-1 text-2xl font-medium">Checked</h3>
          <h3 className="col-span-1 text-2xl font-medium">Title</h3>
          <h3 className="col-span-5 text-2xl font-medium">Description</h3>
          <h3 className="col-span-1 text-2xl font-medium">Status</h3>
          <h3 className="col-span-1 text-2xl font-medium">Priority</h3>
          <h3 className="col-span-3 text-2xl font-medium">Action</h3>
        </div>
      </div>
      <div>
        {todos.map((todo) => (
          <TodoCard key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;
