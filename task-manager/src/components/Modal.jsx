import Form from "./Form";
import { FaTimes } from "react-icons/fa";

const Modal = () => {
  return (
    <div className="modal-overlay show-modal">
      <div className="modal-container">
        <Form />
        <button className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
export default Modal;
