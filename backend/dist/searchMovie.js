"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchMoviesByQuote = void 0;
const db_1 = require("./db/db");
function searchMoviesByQuote(quote) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Case-insensitive search using regular expression
            const regex = new RegExp(quote, "i");
            const searchResult = yield db_1.movie.find({
                script: { $elemMatch: { quote: regex } },
            });
            return searchResult;
        }
        catch (error) {
            console.error("Error searching movies:", error);
            return []; // Return empty array on error
        }
    });
}
exports.searchMoviesByQuote = searchMoviesByQuote;
// Example usage
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("done"); // Wait for connection before searching
    const searchQuote = "राजाओं की, परियों की"; // Replace with your quote
    const results = yield searchMoviesByQuote(searchQuote);
    if (results.length > 0) {
        console.log("Movies found with the quote:");
        results.forEach((movie) => console.log(movie.name));
    }
    else {
        console.log("No movies found with the quote.");
    }
}))();
