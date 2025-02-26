import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="sm:w-xl relative bg-[#f7fafa] rounded-full">
      <input
        type="text"
        className="p-2 ml-6 border-none w-full placeholder:font-thin focus:outline-none "
        placeholder="Search"
      />
      <CiSearch
        className="absolute right-2 top-2.5 w-8 text-gray-300 cursor-pointer duration-200 hover:scale-110"
        style={{ color: "gray", fontSize: "1.2rem" }}
      />
    </div>
  );
};
export default Search;
