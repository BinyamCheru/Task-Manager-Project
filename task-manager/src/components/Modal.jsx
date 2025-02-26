import Form from "./Form";
import { FaTimes } from "react-icons/fa";

const Modal = ({
  isOpenModal,
  toggleModal,
  addTask,
  editTask,
  taskTitle,
  taskDueDate,
  taskDescription,
  setTaskTitle,
  setTaskDueDate,
  setTaskDescription,
}) => {
  return (
    <div className={isOpenModal ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container ">
        <Form
          addTask={addTask}
          editTask={editTask}
          taskTitle={taskTitle}
          taskDueDate={taskDueDate}
          taskDescription={taskDescription}
          setTaskTitle={setTaskTitle}
          setTaskDueDate={setTaskDueDate}
          setTaskDescription={setTaskDescription}
          toggleModal={toggleModal}
        />
        <button onClick={toggleModal} className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
export default Modal;
