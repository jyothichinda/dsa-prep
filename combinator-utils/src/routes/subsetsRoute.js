const express = require("express");
const { subsets } = require("../utils/subsets");

const router = express.Router();

router.post("/subsets", (req, res) => {
  const { nums } = req.body;

  if (!Array.isArray(nums)) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const result = subsets(nums);
  res.json({ result });
});

module.exports = router;
