//  Write a js program to remove all occurrences of a character from string.

function removeAll(str, char) {
  let removeChar = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== char) {
      removeChar += str[i];
    }
  }
  return removeChar;
}

let string = "Inside a book I am not free";
console.log(removeAll(string, "o"));
