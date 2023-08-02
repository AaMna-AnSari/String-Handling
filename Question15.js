//  Writt a JS Program to find the last occurrence of a character in a given string.

function lastCharacter(str, char) {
  let result = str.lastIndexOf(char);
  return result;
}
// Testing

let string = "Pakistan";
console.log(lastCharacter(string, "a"));
