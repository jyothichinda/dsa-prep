const express = require("express");
const { findKSum } = require("../utils/kSum");

const router = express.Router();

router.post("/k-sum", (req, res) => {
  const { nums, k, target } = req.body;

  if (
    !Array.isArray(nums) ||
    typeof k !== "number" ||
    typeof target !== "number"
  ) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const result = findKSum(nums, k, target);
  res.json({ result });
});

module.exports = router;
