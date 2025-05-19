function twoSum(nums, start, target) {
  const seen = new Set();
  const result = [];

  for (let i = start; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      result.push([complement, nums[i]]);
      while (i + 1 < nums.length && nums[i] === nums[i + 1]) i++;
    }
    seen.add(nums[i]);
  }

  return result;
}

function kSum(nums, target, k, start = 0) {
  const res = [];
  if (start >= nums.length) return res;

  if (k === 2) {
    return twoSum(nums, start, target).map((pair) => [...pair]);
  }

  for (let i = start; i < nums.length - k + 1; i++) {
    if (i > start && nums[i] === nums[i - 1]) continue;

    const subsets = kSum(nums, target - nums[i], k - 1, i + 1);
    for (const subset of subsets) {
      res.push([nums[i], ...subset]);
    }
  }

  return res;
}

function findKSum(nums, k, target) {
  nums.sort((a, b) => a - b);
  return kSum(nums, target, k);
}

module.exports = { findKSum };
