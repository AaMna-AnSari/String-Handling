// Write a js Program to compare two strings.

function MyCompare(st1, st2) {
  let result = st1.localeCompare(st2) === 0;
  return result;
}

str1 = "b";
str2 = "c";
console.log(MyCompare(str1, str2));
