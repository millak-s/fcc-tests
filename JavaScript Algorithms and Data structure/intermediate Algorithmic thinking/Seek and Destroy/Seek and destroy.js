/*Seek and DestroyPassed
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.*/
function destroyer(arr) {
  //* Copies the remaining arguments in an array
  const otherArgs = Array.from(arguments).slice(1);

/* Filters the elements that are found in arr by using the filter function on arr and checking if the elements in arr are found in the otherArgs array (array of arguments not stated in the function). */ 
  console.log(arr.filter((element) => otherArgs.indexOf(element) < 0));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

 //* should return [1, 1].

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); //*should return [1, 5, 1].

destroyer([3, 5, 1, 2, 2], 2, 3, 5); //*should return [1].

destroyer([2, 3, 2, 3], 2, 3); //* should return [].

destroyer(["tree", "hamburger", 53], "tree", 53); //* should return ["hamburger"].

destroyer(
  [
    "possum",
    "trollo",
    12,
    "safari",
    "hotdog",
    92,
    65,
    "grandma",
    "bugati",
    "trojan",
    "yacht",
  ],
  "yacht",
  "possum",
  "trollo",
  "safari",
  "hotdog",
  "grandma",
  "bugati",
  "trojan"
); //* should return [12,92,65]
