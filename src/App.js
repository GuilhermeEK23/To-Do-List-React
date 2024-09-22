import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // useEffect para armazenamento da lista de tarefas em localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // useEffect de exemplo para buscar 10 tarefas de uma API externa
  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     const response = await fetch(
  //       "http://jsonplaceholder.typicode.com/todos?_limit=10",
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     const data = await response.json();
  //     setTasks(data);
  //   };
  //   //fetchTasks();
  // }, []);

  // Função para adicionar uma nova tarefa
  const addTask = (title, description) => {
    if (title.trim() === "" || description.trim() === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Verifica se a tarefa já existe na lista
    const taskExists = tasks.some(
      (task) => task.title.toLowerCase() === title.toLowerCase()
    );
    if (taskExists) {
      alert("Essa tarefa já existe na lista.");
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Função para remover uma tarefa
  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  // Função para marcar uma tarefa como concluída
  const handleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="w-screen min-h-screen bg-slate-500 p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de tarefas</Title>
        <AddTask addTask={addTask} tasks={tasks} />
        <Tasks
          tasks={tasks}
          handleTaskCompletion={handleTaskCompletion}
          removeTask={removeTask}
        />
      </div>
    </div>
  );
}

export default App;
