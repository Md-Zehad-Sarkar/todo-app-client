import { useAppDispatch } from "@/redux/hooks";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toggleCompleted } from "@/redux/features/todoSlice";
type TTodoCardsProps = {
  title: string;
  description: string;
  isCompleted?: boolean;
  id?: string;
};

const TodoCard = ({ title, description, isCompleted, id }: TTodoCardsProps) => {
  const dispatch = useAppDispatch();
  const handleToggle = () => {
    dispatch(toggleCompleted(id as string));
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

      <div className="flex col-span-4 gap-3">
        <Button>Edit</Button>
        <Button>Delete</Button>
      </div>
    </div>
  );
};

export default TodoCard;
