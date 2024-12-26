import { useContext } from "react";
import { LocationContext } from "../../Context";
import { getLocationByName } from "../../Data/Data-list";
import useDebounce from './../../Hooks/useDebounce';

const Search = () => {
  const { setSelectedLocation } = useContext(LocationContext);

  // step:2== Debounce hook is used to delay the execution of the function passed to it.
  const doSearch = useDebounce((val) => {
    const fetchedLocation = getLocationByName(val);
    setSelectedLocation({ ...fetchedLocation });
  }, 1000);

  // step:1 == call handleChange function
  const handleChange = (e) => {
    const value = e.target.value;
    doSearch(value);
  };

  return (
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          onChange={handleChange}
          placeholder="Search Location"
          required
        />
        
      </div>
    </form>
  );
};

export default Search;
