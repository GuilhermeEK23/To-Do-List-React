import { CheckIcon, ChevronRightIcon, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, handleTaskCompletion, removeTask }) {
  const navigate = useNavigate();

  const onSeeDetailsClick = (title, description) => {
    const query = new URLSearchParams();
    query.set("title", title);
    query.set("description", description);
    navigate(`/task?${query}`);
  };

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <Button
            onClick={() => handleTaskCompletion(task.id)}
            className={`bg-slate-400 w-full text-white py-2 rounded-md px-4 flex items-center ${
              task.completed ? `line-through` : ``
            }`}
          >
            {task.completed ? <CheckIcon /> : ""}
            {task.title}
          </Button>
          <Button
            onClick={() => onSeeDetailsClick(task.title, task.description)}
          >
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => removeTask(task.id)}>
            <Trash />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
