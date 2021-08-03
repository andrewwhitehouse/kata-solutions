function findNumIter(nums, target) {
  let low = -1;
  let high = -1;
  for(let i=0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (low === -1) {
        low = i;
      }
      high = i;
    }
    // Could optimise to stop as soon as we find a value greater than target
  }
  return [low, high];
}

/*
 * Note how function arguments allow us to pass values from one function call to the next.
 * We need to be careful about stack overflow, which can happen if nums is very large.
 * Google "javascript stack size" or see https://stackoverflow.com/questions/7826992/browser-javascript-stack-size-limit
 */
function findNumRecur(nums, target, index, result) {
  console.log(`nums ${nums} target ${target} index ${index} result ${result}`);
  if (index < nums.length) {
    let [low, high] = result;
    if (nums[index] == target) {
      return findNumRecur(nums, target, index+1, [low === -1 ? index : low, index])    ;
    } else if (low !== -1) {
      // We have found a non-matching value after a previous match, so we're finished
      return [low, high];
    } else {
      // Haven't matched yet
      return findNumRecur(nums, target, index+1, [-1, -1]);
    }
  }
  return result;
}

function findNumReduce(nums, target) {
  /*
   * If nums contains a large number of elements and only a small subset match target
   * you might want to break early. But it isn't obvious how to do this.
   * Read https://stackoverflow.com/questions/36144406/how-to-early-break-reduce-method for tips.
   */
  return nums.reduce(([low, high], num, index) => {
    console.log(`[low, high] ${[low, high]} num ${num} index ${index}`);
    if (num == target) {
      return [low === -1 ? index : low, index];
    } else {
      return [low, high];
    }
  }, [-1, -1]);
}

// Uncomment the required implementation

// const findNum = (nums, target) => findNumIter(nums, target);
// const findNum = (nums, target) => findNumRecur(nums, target, 0, [-1, -1]);
const findNum = (nums, target) => findNumReduce(nums, target);

module.exports = { findNum };