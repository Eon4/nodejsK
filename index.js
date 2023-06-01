import express from "express";
import { postRouter } from "./Routers/post.router.js";
import { collectionRouter } from "./Routers/collection.router.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hej verden!");
});

app.get("/about", (req, res) => {
  res.send("Læs mere om min Node.js app!");
});

app.use(postRouter);
app.use(collectionRouter);

app.use((req, res, next) => {
  res.status(404).send("Siden blev ikke fundet");
});

app.listen(process.env.PORT, () => {
  console.log(`Server kører på http://localhost:${process.env.PORT}`);
});
