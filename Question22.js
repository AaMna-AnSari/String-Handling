// . Write a js program to remove last occurrence of a character from string.
function removeLast(str, char) {
  firstOccurrence = str.lastIndexOf(char);
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char && i === firstOccurrence) {
      return str.slice(0, i) + str.slice(i + 1);
    }
  }
}

let string = "Inside a book I am not free";
console.log(removeLast(string, "o"));
