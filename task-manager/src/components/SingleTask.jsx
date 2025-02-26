import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const SingleTask = ({
  id,
  task,
  description,
  isComplete,
  deleteTask,
  editTask,
  taskComplete,
}) => {
  return (
    <article
      className={
        isComplete
          ? "m-4 p-4 bg-green-400 rounded-xl max-w-[300px]"
          : "m-4 p-4 bg-[#CAD9F6] rounded-xl max-w-[300px]"
      }
    >
      <div className="flex justify-between mb-2 bg-purple-500 p-2 rounded-sm">
        <div className="flex space-x-4 bg-">
          <input
            type="checkbox"
            value={isComplete}
            onChange={() => taskComplete(id)}
          />
          <p>{task} </p>
        </div>
        <div className="flex space-x-4">
          <button onClick={() => editTask(id)}>
            <FiEdit2 style={{ fontSize: "1.2rem", color: "white" }} />
          </button>
          <button onClick={() => deleteTask(id)}>
            <MdDelete style={{ fontSize: "1.2rem", color: "white" }} />
          </button>
        </div>
      </div>
      <p>{description}</p>
    </article>
  );
};
export default SingleTask;
