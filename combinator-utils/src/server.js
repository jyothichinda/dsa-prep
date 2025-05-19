const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Import routes
const twoSumRoute = require("./routes/twoSumRoute");
const threeSumRoute = require("./routes/threeSumRoute");
const kSumRoute = require("./routes/kSumRoute");
const subsetsRoute = require("./routes/subsetsRoute");

const app = express();
const PORT = process.env.BE_PORT || 9000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", twoSumRoute);
app.use("/api", threeSumRoute);
app.use("/api", kSumRoute);
app.use("/api", subsetsRoute);

// Health check
app.get("/", (req, res) => {
  res.send("Combinatorics API is running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
