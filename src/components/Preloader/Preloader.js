import React from "react";
import "./Preloader.css";

const Preloader = ({ isVisible = false }) => {
  if (!isVisible) return null;

  return (
    <div className="preloader">
      <div
        className="preloader__spinner"
        role="status"
        aria-label="Carregando..."
      >
        <div className="preloader__circle"></div>
        <div className="preloader__circle"></div>
        <div className="preloader__circle"></div>
      </div>
      <p className="preloader__text">Carregando...</p>
    </div>
  );
};

export default Preloader;
