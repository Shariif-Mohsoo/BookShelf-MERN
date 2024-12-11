// console.log("Hello Mohsoo");
import express from "express";
import mongoose from "mongoose";

import { port, mongoDBURL } from "./config.js";
import { Book } from "./models/bookModels.js";

const app = express();

// Middleware for parsing the request body
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to MERN tutorial");
});

// route to save a book
app.post("/books", async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;
    if (!title || !author || !publishYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }
    const newBook = {
      title,
      author,
      publishYear,
    };
    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for Get All Books from Database.
app.get("/books", async (req, res) => {
  try {
    // to get all books
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for get one book form database by id.
app.get("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for update a book
app.put("/books/:id", async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;
    if (!title || !author || !publishYear) {
      return res.status(400).send({
        message: "Send all required fields:title,author,publishYear",
      });
    }
    const { id } = req.body;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) return res.status(404).json({ message: "Book Not Found" });
    return res.status(200).send({ message: "Book Update Successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for deleting the book
app.delete("/books/:id", async (req, res) => {
  try {
    const { id } = request.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) return res.status(404).json({ message: "Book not found" });
    return res.status(200).send({ message: "Book Deleted Successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

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
