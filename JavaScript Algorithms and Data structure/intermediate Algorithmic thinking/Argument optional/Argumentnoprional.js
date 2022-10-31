/*Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.*/

function addTogether() {
  let args = Array.from(arguments).slice(0);
  const addToo = function (y) {
      if (typeof y !== "number") {
        return undefined;
      } else return args[0] + y;
    }

  if (args.some((el) => typeof el !== "number")) {
    return undefined;
  } else if (args[1] === undefined) {
    return addToo;
  } else return args[0] + args[1];
}

console.log("Results:", addTogether(2, 3)); //should return 5.

console.log("Results:", addTogether(23, 30)); //should return 53.

console.log("Results:", addTogether(5)(7)); //should return 12.

console.log(
  "Results:",
  addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
); //should return undefined.

console.log("Results:", addTogether(2, "3")); //should return undefined.

console.log("Results:", addTogether(2)([3])); //should return undefined.
