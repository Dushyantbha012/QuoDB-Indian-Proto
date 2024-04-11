import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div
      className="w-screen text-4xl text-center mt-0 pb-6 h-[50px]"
      onClick={() => navigate("/")}
    >
      QuoDB Hindi - Dushyant Bhardwaj
    </div>
  );
}

export default Header;
