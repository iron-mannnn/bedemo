import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3030;

app.get("/", (req, res) => {
  res.send("Hello Human Being");
});

app.get("/instagram", (req, res) => {
  res.send("Human Instagram");
});

app.get("/car", (req, res) => {
  res.send("<h1>Human Car - Gwagon</h1>");
});

app.get("/phone", (req, res) => {
  res.send("<h2>Samsung S26</h2>");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
