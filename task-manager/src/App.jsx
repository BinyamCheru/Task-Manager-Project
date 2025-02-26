import { useState } from "react";
import Modal from "./components/Modal";
import TaskList from "./components/TaskList";
import Search from "./components/Search";
import Navbar from "./components/Navbar";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const addTask = (task) => {
    const newTask = [...tasks, task];
    setTasks(newTask);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const editTask = (id) => {
    const editedTask = tasks.map((task) => {
      if (task.id === id) {
        return task;
      }
    });

    setTasks(newTasks);
  };

  return (
    <main>
      <Modal
        isOpenModal={isOpenModal}
        toggleModal={toggleModal}
        addTask={addTask}
        editTask={editTask}
        taskTitle={taskTitle}
        taskDueDate={taskDueDate}
        taskDescription={taskDescription}
        setTaskTitle={setTaskTitle}
        setTaskDueDate={setTaskDueDate}
        setTaskDescription={setTaskDescription}
      />
      <Navbar toggleModal={toggleModal} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </main>
  );
}

export default App;
