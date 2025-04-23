import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3030;

app.get("/api/", (req, res) => {
  res.send("Hello Human Being");
});

app.get("/api/instagram", (req, res) => {
  res.send("Human Instagram");
});

app.get("/api/car", (req, res) => {
  res.send("<h1>Human Car - Gwagon</h1>");
});

app.get("/api/phone", (req, res) => {
  res.send("<h2>Samsung S26</h2>");
});

const jokes = [
  { id: 1, title: "Joke Number 01", body: "Just a Joke Number 01" },
  { id: 2, title: "Joke Number 02", body: "Just a Joke Number 02" },
  { id: 3, title: "Joke Number 03", body: "Just a Joke Number 03" },
  { id: 4, title: "Joke Number 04", body: "Just a Joke Number 04" },
  { id: 5, title: "Joke Number 05", body: "Just a Joke Number 05" },
];

app.get("/api/jokes", (req, res) => {
  res.send(jokes);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
