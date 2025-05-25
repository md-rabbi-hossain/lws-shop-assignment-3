// src/components/ResuableComponent/RatingStars.jsx
import React from "react";

const RatingStars = ({ rating }) => {
  return (
    <div className="flex items-center text-sm">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={
            index < Math.round(rating) ? "text-yellow-400" : "text-gray-300"
          }
        >
          ★
        </span>
      ))}
      <span className="text-xs text-gray-500 ml-1">{rating}/5</span>
    </div>
  );
};

export default RatingStars;
