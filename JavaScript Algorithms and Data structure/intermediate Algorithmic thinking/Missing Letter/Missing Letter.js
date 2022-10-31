/*Missing letters
Find the missing letter in the passed letter range and return it.


If all letters are present in the range, return undefined.*/

let fearNotLetter = (str) => {
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    const missingChar = str.charCodeAt(i + 1) - 1;

    if (missingChar > char) {
      return String.fromCharCode(missingChar);
    }
  }
};

console.log("Missing Letter 1:", fearNotLetter("abce")); //* should return the string d.

console.log('missing Letter 2:',fearNotLetter("abcdefghjklmno")); //* should return the string i.

console.log('Missing Letter 3:',fearNotLetter("stvwx")); //* should return the string u.

console.log('Missing Letter 4:',fearNotLetter("bcdf")); //* should return the string e.

console.log('Missing Letter 5:',fearNotLetter("abcdefghijklmnopqrstuvwxyz")); //* should return undefined.
