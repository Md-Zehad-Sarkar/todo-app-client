import React from "react";
import { Button } from "../ui/button";

const TodoCard = ({ title, description, isCompleted, id }) => {
  return (
    <div className="grid grid-cols-12 justify-items-center py-2">
      <p className="col-span-1">{title}</p>
      <p className="col-span-5">{description}</p>
      <p className="col-span-1">{isCompleted}</p>

      <div className="flex gap-3 col-span-5">
        <Button>Edit</Button>
        <Button>Delete</Button>
      </div>
    </div>
  );
};

export default TodoCard;
