/*Steamroller
Flatten a nested array. You must account for varying levels of nesting.*/

const steamrollArray = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === true) {
      let newVal = steamrollArray(arr[i]);
      newArr.push(...newVal);
    } else newArr.push(arr[i]);
  }
  return newArr;
};

console.log("result:", steamrollArray([[["a"]], [["b"]]])); //should return ["a", "b"].

steamrollArray([1, [2], [3, [[4]]]]); //should return [1, 2, 3, 4].

steamrollArray([1, [], [3, [[4]]]]); //should return [1, 3, 4].

console.log("result:", steamrollArray([1, {}, [3, [[4]]]])); //should return [1, {}, 3, 4].

/*Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.*/
