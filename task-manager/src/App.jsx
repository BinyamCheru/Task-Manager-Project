import { useState } from "react";
import Modal from "./components/Modal";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";

const demoTasks = [
  {
    id: "1a2b3c",
    task: "Complete project report",
    description: "Finish and submit the quarterly project report.",
    dueDate: "2025-03-01",
    isComplete: false,
  },
  {
    id: "4d5e6f",
    task: "Prepare presentation",
    description: "Create slides for the upcoming team meeting.",
    dueDate: "2025-03-05",
    isComplete: false,
  },
  {
    id: "7g8h9i",
    task: "Buy groceries",
    description: "Get milk, eggs, bread, and vegetables.",
    dueDate: "2025-02-28",
    isComplete: false,
  },
  {
    id: "0j1k2l",
    task: "Schedule doctor appointment",
    description: "Book an appointment with Dr. Smith for a check-up.",
    dueDate: "2025-03-10",
    isComplete: false,
  },
  {
    id: "3m4n5o",
    task: "Pay electricity bill",
    description: "Pay the monthly electricity bill online.",
    dueDate: "2025-02-27",
    isComplete: false,
  },
];

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
    console.log(editedTask);

    const [{ id: taskId, task, description, dueDate }] = editedTask;
    console.log(task, description, dueDate);

    deleteTask(taskId);
    setTaskTitle(task);
    setTaskDueDate(dueDate);
    setTaskDescription(description);
    setIsOpenModal(true);
  };

  const taskComplete = (id) => {
    console.log(id);
    const updatedTaskArray = tasks.map((task) => {
      if (task.id === id) {
        if (task.isComplete === false) {
          task.isComplete = true;
        } else {
          task.isComplete = false;
        }
        return task;
      }
      return task;
    });

    setTasks(updatedTaskArray);
  };
  return (
    <main className="bg-[#F1F5F8] min-h-screen">
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
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
        taskComplete={taskComplete}
      />
    </main>
  );
}

export default App;
