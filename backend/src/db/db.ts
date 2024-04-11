import mongoose, { Document, Schema } from "mongoose";

const url =
  "mongodb+srv://dushyantbha012:Moderndps%401@cluster0.emmqofc.mongodb.net";

mongoose.connect(url);

const db = mongoose.connection;

export type movieType = {
  name: string;
  script: { time: string; quote: string }[];
  genre: string;
  year: number;
};

const movieSchema = new mongoose.Schema<movieType>({
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

export const movie = mongoose.model("movie", movieSchema);
