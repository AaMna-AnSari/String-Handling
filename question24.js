// Write a js program to replace first occurrence of a character with another in a string.
function firstOccurrence(str, char) {
  let result = str.indexOf(char);
  if (str[result] === char) return str.replace(char, "a");
}
let string = "Love YourSelf First";
console.log(firstOccurrence(string, "o"));
