import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import * as C from "./AppStyle";

interface TaskType {
  id: string | number;
  title: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    const getTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=3"
      );
      setTasks(data);
    };

    getTasks();
  }, []);

  const handleTaskAdd = () => {
    const newTasks = [
      ...tasks,
      {
        title: task,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
    setTask("");
  };

  const handleTaskRemove = (taskId: number | string) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  const handleTaskClick = (taskId: number | string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }

      return task;
    });

    setTasks(newTasks);
  };

  return (
    <C.Container>
      <C.Title>Minhas Tarefas</C.Title>
      <C.AreaAdd>
        <C.Input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <C.Button onClick={handleTaskAdd}>Adicionar</C.Button>
      </C.AreaAdd>
      {tasks.map((item, index) => (
        <C.Task key={index} completed={item.completed}>
          <C.TitleTask onClick={() => handleTaskClick(item.id)}>
            {item.title}
          </C.TitleTask>
          <CgClose
            size={25}
            color="chartreuse"
            onClick={() => handleTaskRemove(item.id)}
          />
        </C.Task>
      ))}
    </C.Container>
  );
}

export default App;
