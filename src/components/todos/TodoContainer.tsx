import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoFilter from "./TodoFilter";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div className=" bg-navbar-gradient">
      <div className="flex justify-between items-center py-2">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-purple-400 w-full h-full">
        <div className="bg-red-400 grid grid-cols-12 justify-items-center py-2">
          <h3 className="col-span-1 bg-gray-700">Title</h3>
          <h3 className="col-span-5 bg-slate-500">Description</h3>
          <h3 className="col-span-1 bg-indigo-500">Status</h3>
          <h3 className="col-span-5 bg-sky-500">Action</h3>
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
