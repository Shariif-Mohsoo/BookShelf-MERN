// console.log("Hello Mohsoo");
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { port, mongoDBURL } from "./config.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

// Middleware for parsing the request body
app.use(express.json());
// Option 1: Allow all origins with default of cors(*)
app.use(cors());
// Option2 : Allow custom origins
// app.use({
//   origin: "http://localhost:3000",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type"],
// });

app.get("/", (req, res) => {
  res.status(200).send("Welcome to MERN tutorial");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App Connected To mongoDB");
    app.listen(port, () => {
      console.log("Listening at port ", port);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
