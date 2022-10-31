/*Missing letters
Find the missing letter in the passed letter range and return it.


If all letters are present in the range, return undefined.*/

let fearNotLetter = (str) => {
  //* Create a string of all letters for refrence.
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  //* Create a start point for a loop by finding the position of the first character of the argument in the alphabet string.
  const from = alphabet.indexOf(str[0]);

  //* Use a for loop to look through the letters of the alphabet.
  for (let i = from; i < str.length; i++) {

  //* If a letter has an index less 0 (not found in the argument), return the letter.
    if (str.indexOf(alphabet[i]) < 0) {
      return alphabet[i];
    }
  }
};

console.log("missing letter:", fearNotLetter("abce")); //* should return the string d.

fearNotLetter("abcdefghjklmno"); //* should return the string i.

fearNotLetter("stvwx"); //* should return the string u.

fearNotLetter("bcdf"); //* should return the string e.

console.log("missing letter:", fearNotLetter("abcdefghijklmnopqrstuvwxyz")); //* should return undefined.
