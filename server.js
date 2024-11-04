const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

// Serve the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Listening on port 8080
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// API routes
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.get("/api/items", (req, res) => {
  res.json({ message: "Items route" });
});
