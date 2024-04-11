import React, { useEffect, useState } from "react";
import axios from "axios";

import Loader from "../loader/Loader";
import "./inputBox.css";
import "./button.css";

import Card from "../movie/Card";
function InputBox() {
  const [isLoading, setIsLoading] = useState(false);
  interface movie {
    name: string;
    script: [{ time: string; quote: string }];
  }

  const [movies, setMovies] = useState<movie[]>([]);
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [quote, setQuote] = useState("");
  const [year, setYear] = useState(0);
  const onClickHandeler = async () => {
    setIsLoading(true);

    const res = await axios({
      url: "http://localhost:3000/get",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: { name: name, genre: genre, quote: quote, year: year },
    });

    console.log("res is :", res);
    setMovies(res.data.moviesFound);
    setIsLoading(false);
  };

  return (
    <div>
      <div className="w-screen text-4xl text-center mt-0 pb-6 h-[50px]">
        Get Movies - Hindi
      </div>
      <div className="flex flex-wrap align-middle justify-center items-center w-screen mr-[40%]">
        <div className="container my-[20px] flex flex-wrap align-middle justify-center items-center w-[40%] ">
          <input
            className="input"
            name="name"
            type="text"
            required={true}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label className="label">Movie Name</label>
        </div>
        <div className="container my-[20px] flex flex-wrap align-middle justify-center items-center w-[40%]">
          <input
            className="input"
            name="quote"
            type="text"
            required={true}
            value={quote}
            onChange={(e) => {
              setQuote(e.target.value);
            }}
          />
          <label className="label">Quote</label>
        </div>
        <div className="container my-[20px] flex flex-wrap align-middle justify-center items-center w-[40%]">
          <input
            className="input "
            name="year"
            type="number"
            required={true}
            value={year}
            onChange={(e) => {
              setYear(Number(e.target.value));
            }}
          />
          <label className="label">Year</label>
        </div>
        <div className="container my-[20px] flex flex-wrap align-middle justify-center items-center w-[40%]">
          <input
            className="input"
            name="genre"
            type="text"
            required={true}
            value={genre}
            onChange={(e) => {
              setGenre(e.target.value);
            }}
          />
          <label className="label">Genre</label>
        </div>
      </div>
      <div className="container my-[20px] flex flex-wrap align-middle justify-center items-center pl-[6%]">
        <button className="bg-blue-600" onClick={onClickHandeler}>
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Find Movie</span>
        </button>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap items-center align-middle justify-center">
          {movies.map((movie) => {
            console.log(
              "movie name is ",
              movie.name,
              " movie quote is ",
              movie.script[0].quote
            );
            return (
              <div className="m-[5px]">
                <Card name={movie.name} quote={movie.script[0].quote} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default InputBox;
