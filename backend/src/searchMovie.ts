import mongoose from "mongoose";

import { movie, movieType } from "./db/db";

export async function searchMoviesByQuote(quote: string): Promise<movieType[]> {
  try {
    // Case-insensitive search using regular expression
    const regex = new RegExp(quote, "i");
    const searchResult = await movie.find({
      script: { $elemMatch: { quote: regex } },
    });
    return searchResult;
  } catch (error) {
    console.error("Error searching movies:", error);
    return []; // Return empty array on error
  }
}

// Example usage
(async () => {
  console.log("done"); // Wait for connection before searching
  const searchQuote = "राजाओं की, परियों की"; // Replace with your quote
  const results = await searchMoviesByQuote(searchQuote);

  if (results.length > 0) {
    console.log("Movies found with the quote:");
    results.forEach((movie) => console.log(movie.name));
  } else {
    console.log("No movies found with the quote.");
  }
})();
