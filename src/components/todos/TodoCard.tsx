import { useAppDispatch } from "@/redux/hooks";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { removeTodo, toggleCompleted } from "@/redux/features/todoSlice";
import { Trash } from "lucide-react";
import UpdateTodoModal from "./UpdateTodoModal";

type TTodoCardsProps = {
  title: string;
  description: string;
  isCompleted?: boolean;
  id?: string;
  priority?: string;
};

const TodoCard = ({
  title,
  description,
  isCompleted,
  id,
  priority,
}: TTodoCardsProps) => {
  const dispatch = useAppDispatch();

  //* toggle checked unchecked
  const handleToggle = () => {
    dispatch(toggleCompleted(id as string));
  };

  //* delete todo handler
  const handleDelete = () => {
    dispatch(removeTodo(id as string));
  };
  return (
    <div className="grid grid-cols-12 py-2 justify-items-center">
      <p className="col-span-1">
        <Input
          onChange={handleToggle}
          type="checkbox"
          defaultChecked={isCompleted}
        />
      </p>
      <p className="col-span-1">{title}</p>
      <p className="col-span-5">{description}</p>
      <p className="col-span-1">{isCompleted ? <p>done</p> : <p>pending</p>}</p>
      <p className="col-span-1">{priority}</p>

      <div className="flex col-span-3 gap-3">
        {/* <Button onClick={handleUpdate}> */}
        <UpdateTodoModal
          id={id}
          title={title}
          description={description}
          priority={priority}
        />
        {/* </Button> */}
        <Button onClick={handleDelete}>
          <Trash />
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
