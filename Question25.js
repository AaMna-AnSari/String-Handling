// Write a js program to replace last occurrence of a character with another in a string.
function lastOccurrence(str, char) {
  let result = str.lastIndexOf(char);
  if (result !== -1) {
    return (str = str.slice(0, result) + "a" + str.slice(result + 1));
  }
}
let string = "Love YourSelf First";
console.log(lastOccurrence(string, "o"));
