import React from 'react'
import { useProductContext } from "../../context/productcontext";

function SortInput() {
  const { sortType, dispatch } = useProductContext();

  const handleChange = (e) => {
    dispatch({ type: "SET_SORT", payload: e.target.value });
  };
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Products</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Sort by:</span>
          <select
            className="border rounded-md px-2 py-1 text-sm"
            value={sortType}
            onChange={handleChange}
          >
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default SortInput