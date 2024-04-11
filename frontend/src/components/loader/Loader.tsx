import React from "react";

import "./loader.css";

function Loader() {
  return (
    <div className="flex flex-wrap items-center justify-center align-middle w-screen">
      <div className="pyramid-loader">
        <div className="wrapper">
          <span className="side side1"></span>
          <span className="side side2"></span>
          <span className="side side3"></span>
          <span className="side side4"></span>
          <span className="shadow"></span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
