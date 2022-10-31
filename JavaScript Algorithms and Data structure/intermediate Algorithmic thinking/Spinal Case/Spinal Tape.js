/* Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.*/

function spinalCase(str) {
  //* Create a placeholder to avoid mutations,add dashes to seperate words and convert all letters to lowerCase.
  let str1 = str
    .slice()
    .replace(/\s|(?=\B[A-Z])/g, "-")
    .toLowerCase();

  return console.log("spinal tap:", str1.replace(/(_)/g, ""));

  //* Return the placeholder;
}
spinalCase("This Is Spinal Tap");

spinalCase("This Is Spinal Tap"); //*should return the string this-is-spinal-tap.

spinalCase("thisIsSpinalTap"); //*should return the string this-is-spinal-tap.

spinalCase("The_Andy_Griffith_Show"); //*should return the string the-andy-griffith-show.
spinalCase("Teletubbies say Eh-oh"); //*should return the string teletubbies-say-eh-oh.
