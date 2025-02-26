import Button from "./Button";
import Modal from "./Modal";
import Search from "./Search";
import { FaPlus } from "react-icons/fa";

const Navbar = ({ toggleModal }) => {
  return (
    <nav className=" p-2 bg-white shadow-2xl">
      <div className="max-w-4xl mx-auto flex space-x-4 sm:space-x-2  items-center justify-around">
        <Search />
        <div className="flex space-x-2">
          {/* <Button text="Sort Task" /> */}
          <Button onClick={toggleModal} text="New Task">
            <FaPlus />
          </Button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
