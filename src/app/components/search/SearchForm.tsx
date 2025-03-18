import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchForm = () => {
  return (
    <div className="w-full flex justify-center items-center my-3 relative">
      <div className="w-[20rem] sm:w-[32rem] lg:w-[42rem] relative">
        <input
          type="text"
          placeholder="search"
          className="bg-gray-400 w-[20rem] sm:w-[32rem] lg:w-[42rem] h-12 pl-3 rounded-2xl"
        />
        <FaMagnifyingGlass className="absolute right-3.5 top-3.5" />
      </div>
    </div>
  );
};

export default SearchForm;
