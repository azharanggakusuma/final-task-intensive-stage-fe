// src/components/StarRating.js
import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const starElements = [];

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    starElements.push(<FaStar key={i} className="text-yellow-500" />);
  }

  // Add half star if needed
  if (hasHalfStar) {
    starElements.push(
      <FaStarHalfAlt key={starElements.length} className="text-yellow-500" />
    );
  }

  // Add empty stars to complete 5 stars
  while (starElements.length < totalStars) {
    starElements.push(
      <FaStar key={starElements.length} className="text-gray-300" />
    );
  }

  return <div className="flex items-center">{starElements}</div>;
};

export default StarRating;
