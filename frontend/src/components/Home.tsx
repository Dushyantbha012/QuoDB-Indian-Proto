import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-screen text-4xl text-center mt-0 pb-6 h-[50px]">
        QuoDB Hindi - Dushyant Bhardwaj
      </div>
      <div className="flex flex-nowrap items-center justify-center align-middle mt-4">
        <div className="mx-8">
          <button
            className="new"
            onClick={async () => {
              navigate("/set");
            }}
          >
            {" "}
            SET SCRIPT
          </button>
        </div>
        <div className="mx-8">
          <button
            className="new"
            onClick={async () => {
              navigate("/get");
            }}
          >
            {" "}
            GET MOVIES
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
