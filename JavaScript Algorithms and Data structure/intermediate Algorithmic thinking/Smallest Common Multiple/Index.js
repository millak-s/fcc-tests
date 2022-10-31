/*Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

smallestCommons([1, 5]) should return a number.*/

let smallestCommons = (arr) => {
  arr.sort((a, b) => a - b);
  let [min, max] = arr;
  let limit = 1;
  let divisorsNum = [];

  for (let i = min; i <= max; i++) {
    divisorsNum.push(i);
    limit *= i;
  }

  for (let multiple = max; multiple <= limit; multiple ++) {
    let multipleNum = [];
    for (let i = min; i <= max; i++) {
      if (multiple % i === 0) {
        multipleNum.push(1);
      }
    }
    if (multipleNum.length === divisorsNum.length) {
      console.log(multiple);
      return multiple;
    }
  }
};

smallestCommons([1, 5]); //should return 60.

smallestCommons([5, 1]); //should return 60.

smallestCommons([2, 10]); //should return 2520.

smallestCommons([1, 13]); // should return 360360.

smallestCommons([23, 18]); //should return 6056820.
