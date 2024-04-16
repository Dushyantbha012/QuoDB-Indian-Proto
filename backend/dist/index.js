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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./db/db");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post("/set", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.body.name;
    const script = req.body.script;
    const genre = req.body.genre;
    const year = req.body.year;
    const newMovie = yield db_1.movie.create({
        name: name,
        script: script,
        genre: genre,
        year: year,
    });
    console.log("new movie is :", newMovie);
    res.json({ message: "movie Created", movie: newMovie });
}));
app.post("/get", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.body.name || "";
    const quote = req.body.quote || "";
    const genre = req.body.genre || "";
    const year = req.body.year || 0;
    let searchCriteria = {};
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
        }
        else {
            searchCriteria["script"] = { $elemMatch: { quote: regex } };
        }
    }
    else {
        searchCriteria.name = nameRegex; // Only search by name if no quote provided
    }
    const genreRegex = new RegExp(genre, "i");
    if (genre !== "") {
        searchCriteria.genre = genreRegex; // Search by genre
    }
    if (year !== 0) {
        searchCriteria.year = year; // Search by genre
    }
    const searchResult = yield db_1.movie.find(searchCriteria);
    res.json({ moviesFound: searchResult });
}));
app.listen(3000, () => {
    console.log("Server Running on ", 3000);
});
