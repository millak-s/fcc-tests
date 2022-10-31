function destroyer(arr) {
  const otherArgs = Array.from(arguments).slice(1);

  for (let i = 0; i < arr.length; i++) {
    if (otherArgs.indexOf(arr[i]) >= 0) {
      delete arr[i];
    }
  }

 console.log(arr.filter(item => item !== null));
 return arr; 
}

destroyer([1, 2, 3, 4, 5, 6],1,4,3,6); //* should retutn [2,5].

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