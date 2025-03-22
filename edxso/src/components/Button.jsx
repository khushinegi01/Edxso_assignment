import React from "react";
import { useId } from "react";

function Button({ changeColor, color, className = "", ...props }) {
  const id = useId();

  return (
    <button
      id={id}
      onClick={changeColor}
      className={`w-45 h-45 border rounded-xl transition-colors duration-300 ${color} ${className}`}
      {...props}
    >
      
    </button>
  );
}

export default Button;
