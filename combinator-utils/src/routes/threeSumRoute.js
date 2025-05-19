const express = require("express");
const { threeSum } = require("../utils/threeSum");

const router = express.Router();

router.post("/three-sum", (req, res) => {
  const { nums, target = 0 } = req.body;

  if (!Array.isArray(nums)) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const result = threeSum(nums, target);
  res.json({ result });
});

module.exports = router;
