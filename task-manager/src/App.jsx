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

  return (
    <main>
      <Modal isOpenModal={isOpenModal} toggleModal={toggleModal} />
      <Navbar toggleModal={toggleModal} />
      <TaskList tasks={tasks} />
    </main>
  );
}

export default App;
