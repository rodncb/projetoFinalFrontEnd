import React from "react";
import "./Button.css";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button button_variant_${variant} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
