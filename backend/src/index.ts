import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { movie, movieType } from "./db/db";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/set", async (req, res) => {
  const name = req.body.name;
  const script = req.body.script;
  const genre = req.body.genre;
  const year = req.body.year;
  const newMovie = await movie.create({
    name: name,
    script: script,
    genre: genre,
    year: year,
  });
  console.log("new movie is :", newMovie);
  res.json({ message: "movie Created", movie: newMovie });
});

app.post("/get", async (req, res) => {
  const name = req.body.name || "";
  const quote = req.body.quote || "";
  const genre = req.body.genre || "";
  const year = req.body.year || 0;
  let searchCriteria: any = {};

  const nameRegex = new RegExp(name, "i"); // Case-insensitive name search

  if (quote !== "") {
    const regex = new RegExp(quote, "i");
    if (name !== "") {
      searchCriteria["$or"] = [
        { name: nameRegex }, // Search by name
        {
          script: { $elemMatch: { quote: regex } },
        }, // Search by quote
      ];
    } else {
      searchCriteria["script"] = { $elemMatch: { quote: regex } };
    }
  } else {
    searchCriteria.name = nameRegex; // Only search by name if no quote provided
  }
  const genreRegex = new RegExp(genre, "i");
  if (genre !== "") {
    searchCriteria.genre = genreRegex; // Search by genre
  }
  if (year !== 0) {
    searchCriteria.year = year; // Search by genre
  }

  const searchResult = await movie.find(searchCriteria);

  res.json({ moviesFound: searchResult });
});

app.listen(3000, () => {
  console.log("Server Running on ", 3000);
});
