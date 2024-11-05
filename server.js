const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

// Define the custom application root from environment variables
const applicationRoot = process.env.SCRIPT_NAME || "/";

// Create a router to handle all routes under applicationRoot
const router = express.Router();

// Mount the router at applicationRoot
app.use(applicationRoot, router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Serve the main route
router.get("/", (req, res) => {
  res.send("My Basic Custom App");
});

router.get("/api", (req, res) => {
  res.json({ message: "Hello, world!" });
});
