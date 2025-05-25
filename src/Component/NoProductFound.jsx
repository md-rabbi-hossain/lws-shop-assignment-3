import React from "react";
import SvgIcon from "./ResuableComponent/SvgIcon";

const NoProductFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center text-gray-600">
      <SvgIcon name="notfound" />
      <h2 className="text-2xl font-semibold mb-2">No Products Found</h2>
      <p className="text-gray-400 max-w-xs">
        Sorry, we couldn't find any products that match your search. Please try
        adjusting your filters or search terms.
      </p>
    </div>
  );
};

export default NoProductFound;
