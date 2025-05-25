import { useProductContext } from "../../Context/ProductContext";
import SvgIcon from "./SvgIcon";

const SearchBar = ({ placeholder = "Search...", className = "" }) => {
  const { searchTerm, dispatch } = useProductContext();

  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-gray-100 rounded-full py-2 px-4 text-sm"
        value={searchTerm}
        onChange={(e) =>
          dispatch({ type: "SET_SEARCH", payload: e.target.value })
        }
      />
      <span className="absolute right-3 top-2">
        <SvgIcon name="search" />
      </span>
    </div>
  );
};

export default SearchBar;
