// WRite a JS Program to find the length of string.

function newCopyString(string) {
  let CopyString = string.slice();
  return CopyString;
}

let str = "HeloWorld";
console.log(newCopyString(str));
