//  Writt a JS Program to find the first occurrence of a character in a given string.

function firstCharacter(str, char) {
  let result = str.indexOf(char);
  return result;
}
// Testing

let string = "Pakistan";
console.log(firstCharacter(string, "a"));
