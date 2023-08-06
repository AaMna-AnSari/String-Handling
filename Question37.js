// 36. Write a js program to trim trailing white space characters from given string.

function trimTrailing(str) {
  return str.trimEnd();
}

let string = "Love Yourself First.  ";
console.log(trimTrailing(string));
