"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.movie = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const url = "mongodb+srv://dushyantbha012:Moderndps%401@cluster0.emmqofc.mongodb.net";
mongoose_1.default.connect(url);
const db = mongoose_1.default.connection;
const movieSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        language: "hindi",
    },
    script: [
        {
            time: {
                type: String,
            },
            quote: {
                type: String,
                language: "hindi",
            },
        },
    ],
    genre: {
        type: String,
    },
    year: {
        type: Number,
    },
});
exports.movie = mongoose_1.default.model("movie", movieSchema);
