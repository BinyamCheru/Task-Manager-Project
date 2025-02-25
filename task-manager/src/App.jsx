import { useState } from "react";
import Modal from "./components/Modal";
import TaskList from "./components/TaskList";
import Search from "./components/Search";
import Navbar from "./components/Navbar";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const addTask = (task) => {
    const newTask = [...tasks, task];
    setTasks(newTask);
  };
  return (
    <main>
      <Modal
        isOpenModal={isOpenModal}
        toggleModal={toggleModal}
        addTask={addTask}
      />
      <Navbar toggleModal={toggleModal} />
      <TaskList tasks={tasks} />
    </main>
  );
}

export default App;
