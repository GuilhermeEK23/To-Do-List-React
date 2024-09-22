import { useState } from "react";
import Input from "./Input";

function AddTask({ addTask }) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type={"text"}
        placeholder={"Título da Tarefa"}
        onChange={(event) => setInputTitle(event.target.value)}
      />
      <Input
        type={"text"}
        placeholder={"Descrição da Tarefa"}
        onChange={(event) => setInputDescription(event.target.value)}
      />

      <button
        onClick={() => addTask(inputTitle, inputDescription)}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default AddTask;
