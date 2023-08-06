//  Write a js program to remove all extra blank spaces from given string.

function removeBlankSpaces(str) {
  return str.replace(/\s/g, "");
}

let string = "Love YourSelf First  ";
console.log(removeBlankSpaces(string));
