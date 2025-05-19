const express = require("express");
const { twoSum } = require("../utils/twoSum");

const router = express.Router();

router.post("/two-sum", (req, res) => {
  const { nums, target } = req.body;

  if (!Array.isArray(nums) || typeof target !== "number") {
    return res.status(400).json({ error: "Invalid input" });
  }

  const result = twoSum(nums, target);
  res.json({ result });
});

module.exports = router;
