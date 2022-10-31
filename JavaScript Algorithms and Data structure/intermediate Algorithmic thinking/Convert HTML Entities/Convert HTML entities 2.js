/* Convert HTML Entities

Convert the characters &, <, >, "", and ', in a string to their corresponding HTML entities.*/

function convertHTML(str) {
  if (str.includes("&")) {
    return str.replace(/&/g, "&amp;");
  } else if (str.includes("<")) {
    return str.replace(/</g, "&lt;");
  } else if (str.includes(">")) {
    return str.replace(/>/g, "&gt;");
  } else if (str.includes('"')) {
    return str.replace(/"/g, "&quote;");
  } else if (str.includes("'")) {
    return str.replace(/'/g, "&apos;");
  }
}

console.clear;

console.log("HTML entities:", convertHTML("Dolce & Gabbana")); //* Should return the string Dolce &amp; Gabbana.

console.log("HTML entities:", convertHTML("Hamburgers < Pizza < Tacos")); //* Should return the string Hamvurgers &lt; Pizza &lt; Tacos.

console.log("HTML entities:", convertHTML("Sixty > twelve")); //* Should return the string Sixty &gt; twelve.

console.log("HTML entities:", convertHTML('stuff in "quotation marks"')); //* Should return the string Stuff in &quot;quaotation marks&quot;.

console.log("HTML entities:", convertHTML("Schindler's List")); //* Should return the string Schindler&apos;s List.

console.log("HTML entities:", convertHTML("< >")); //* should return the string &lt; &gt;.

console.log("HTML entities:", convertHTML("abc")); //* should return the string abc.
