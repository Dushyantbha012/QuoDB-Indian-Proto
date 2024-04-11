import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputBox from "./components/inputBox/InputBox";
import SetMovie from "./components/setmovie/SetMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Loader from "./components/loader/Loader";
import Home from "./components/Home";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      <BrowserRouter>
        <div>
          {isLoading ? (
            <Loader />
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/set" element={<SetMovie />} />
              <Route path="/get" element={<InputBox />} />
            </Routes>
          )}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
