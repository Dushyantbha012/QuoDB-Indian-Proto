import React, { useState } from "react";
import "./inputBox.css";
import "./button.css";
import "./button2.css";
import axios from "axios";
function SetMovie() {
  interface scriptInterface {
    time: string;
    quote: string;
  }

  const [script, setScript] = useState<scriptInterface[]>([]);
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [quote, setQuote] = useState("");
  const [time, setTime] = useState("");
  const [year, setYear] = useState(0);

  const onClickHandeler = async () => {
    if (name !== "" && genre !== "" && script.length !== 0) {
      const res = await axios({
        url: "http://localhost:3000/set",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: { name: name, genre: genre, year: year, script: script },
      });
      alert("Movie added");
    }
  };

  return (
    <div className="w-screen flex flex-wrap align-middle justify-center items-center">
      <div className="w-screen text-4xl text-center mt-0 pb-6 h-[50px]">
        SetMovie - Hindi
      </div>
      <div className="container my-[20px] flex flex-wrap align-middle justify-center items-center w-[40%] ">
        <input
          className="input"
          name="name"
          type="text"
          required={true}
          value={name}
          onChange={async (e) => {
            await setName(e.target.value);
            console.log("name is ", name);
          }}
        />
        <label className="label">Movie Name</label>
      </div>
      <div className="container my-[20px] flex flex-wrap align-middle justify-center items-center w-[40%] ">
        <input
          className="input"
          name="genre"
          type="text"
          required={true}
          value={genre}
          onChange={async (e) => {
            await setGenre(e.target.value);
            console.log("genre is ", genre);
          }}
        />
        <label className="label">Genre</label>
      </div>
      <div className="container my-[20px] flex flex-wrap align-middle justify-center items-center w-screen ">
        <input
          className="input"
          name="year"
          type="number"
          required={true}
          value={year}
          onChange={async (e) => {
            await setYear(Number(e.target.value));
            console.log("year is ", year);
          }}
        />
        <label className="label">Year</label>
      </div>

      <div className="container my-[20px] flex flex-wrap align-middle justify-center items-center w-[40%] ">
        <input
          className="input"
          name="time"
          type="text"
          required={true}
          value={time}
          onChange={async (e) => {
            await setTime(e.target.value);
            console.log("time is ", time);
          }}
        />
        <label className="label">Time</label>
      </div>
      <div className="container my-[20px] flex flex-wrap align-middle justify-center items-center w-[40%] ">
        <input
          className="input"
          name="quote"
          type="text"
          required={true}
          value={quote}
          onChange={async (e) => {
            await setQuote(e.target.value);
            console.log("quote is ", quote);
          }}
        />
        <label className="label">Quote</label>
      </div>
      <div className="flex flex-wrap mt-8">
        <div className="mx-8">
          <button
            className="new"
            onClick={async () => {
              await setScript([]);
              console.log("script is after create ", script);
            }}
          >
            {" "}
            Redifine Script
          </button>
        </div>
        <div className="mx-8">
          <button className="bg-blue-600 button2" onClick={onClickHandeler}>
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
            <span>SAVE MOVIE</span>
          </button>
        </div>
        <div className="mx-8">
          <button
            className="new"
            onClick={async () => {
              await setScript((prevScript) => [
                ...prevScript,
                { time: time, quote: quote },
              ]);
              setQuote("");
              setTime("");
              console.log("script is after pushing", script);
            }}
          >
            {" "}
            PUSH
          </button>
        </div>
      </div>
    </div>
  );
}

export default SetMovie;
