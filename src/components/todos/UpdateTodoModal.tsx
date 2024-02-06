import { Edit } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { updateTodo } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hooks";
import { FormEvent, useState } from "react";

const UpdateTodoModal = ({
  title: todoTitle,
  description: todoDescription,
  priority: todoPriority,
  id,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  //add todo
  const dispatch = useAppDispatch();
  const handleUpdate = (e: FormEvent) => {
    e.preventDefault();
    //update data
    const updateData = {
      id,
      title,
      description,
      priority,
    };
    dispatch(updateTodo(updateData));
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Edit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Todo</DialogTitle>
          <DialogDescription>
            Make new todo here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleUpdate}>
          <div className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="title" className="text-right">
                Todo Title
              </Label>
              <Input
                onChange={(e) => setTitle(e.target.value)}
                id="todo-title"
                className="col-span-3"
                defaultValue={todoTitle}
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
                defaultValue={todoDescription}
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="priority" className="text-right">
                Priority
              </Label>
              <Input
                onChange={(e) => setPriority(e.target.value)}
                id="description"
                className="col-span-3"
                defaultValue={todoPriority}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose>
              <Button type="submit">Update Todo</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateTodoModal;
