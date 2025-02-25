import Form from "./Form";
import { FaTimes } from "react-icons/fa";

const Modal = ({ isOpenModal, toggleModal, addTask }) => {
  return (
    <div className={isOpenModal ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <Form addTask={addTask} />
        <button onClick={toggleModal} className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
export default Modal;
