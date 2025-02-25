import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="w-xl relative bg-white rounded-sm">
      <div className="max-w-2xl">
        <input type="text" className="w-full p-1" />
        <CiSearch
          className="absolute right-2 top-2"
          style={{ color: "gray" }}
        />
      </div>
    </div>
  );
};
export default Search;
