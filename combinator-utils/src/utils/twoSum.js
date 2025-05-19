function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // Calculate the complement
    if (map[complement] !== undefined) {
      return [map[complement], i]; // Return index-based result
    }
    map[nums[i]] = i;
  }
  return null;
}

module.exports = { twoSum };
