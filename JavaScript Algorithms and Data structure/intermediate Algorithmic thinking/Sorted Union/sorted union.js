/* Sorted Union
Write a function that takes two or more arrays and returns a new arrau of unique values in the order of the otifinal provided arrays.

In other words, all calues presebt from all arrays should ve included in their orifinal order, but with no duplicates in the final array.

The unique numbers shoukd be sorted by  their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples. */

function uniteUnique(arr) {
  const argArr = Array.from(arguments);
  const newArr = [];

  argArr.forEach((arr) => {
    arr.forEach((element) => {
      if (!newArr.includes(element)) {
        newArr.push(element);
      }
    });
  });

  console.log("Result:", newArr);
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); //* should return [1,3,2,,5,4].
