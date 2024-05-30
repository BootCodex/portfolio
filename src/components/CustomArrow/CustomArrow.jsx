// CustomArrow.js
import React from "react";

export const PrevArrow = ({ className, style, onClick }) => (
  <button
    className={`absolute bottom-4 left-4 z-10 p-2 bg-gray-800 text-white rounded-full ${className}`}
    style={{ ...style, display: "block" }}
    onClick={onClick}
  >
    Prev
  </button>
);

export const NextArrow = ({ className, style, onClick }) => (
  <button
    className={`absolute bottom-4 right-4 z-10 p-2 bg-gray-800 text-white rounded-full ${className}`}
    style={{ ...style, display: "block" }}
    onClick={onClick}
  >
    Next
  </button>
);
