function hasTargetSum(array, target) {
  // Write your algorithm here

  for (i = 0; i < array.length - 1; i++) {
    for (j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n * n)
*/

/* 
  Add your pseudocode here

  iterate the array to get an element
    iterate the remaining elements of the array
      add two elements
        if they total to target return true
  if none of any given two elements total to target return false
*/

/*
  Add written explanation of your solution here

  we'll take the first element of this array
  then check with the next one to see if it reaches the target
  if none of the next elements for the first element total to 
  target, we then go onto the second element to add the remaining
  elements. Thus will require a nested loop.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([22, 19, 4, 7, 30], 25));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 7, 30], 37));
}

module.exports = hasTargetSum;
