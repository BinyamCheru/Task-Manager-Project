import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const SingleTask = ({ task, description, isComplete }) => {
  return (
    <article className="m-4 p-4 bg-[#CAD9F6] rounded-xl max-w-[300px]">
      <div className="flex justify-between mb-2 bg-purple-500 p-2 rounded-sm">
        <div className="flex space-x-4 bg-">
          <input type="checkbox" />
          <p>{task} </p>
        </div>
        <div className="flex space-x-4">
          <button>
            <FiEdit2 style={{ fontSize: "1.2rem", color: "white" }} />
          </button>
          <button>
            <MdDelete style={{ fontSize: "1.2rem", color: "white" }} />
          </button>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
        tempor incidunt ut labore et dolore magna aliqua.
      </p>
    </article>
  );
};
export default SingleTask;
