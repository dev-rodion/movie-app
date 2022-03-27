import React from "react";
import "./loader.scss";

const Loader = (props) => {
  if (props.isLoaded) return null;

  return (
    <div className="loader">
      <div className="loader__spinner">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
