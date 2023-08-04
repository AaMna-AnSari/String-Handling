// Write a js program to check whether a string is palindrome or not.

let palindrome = (str) => {
  let change = str.toLowerCase().replace(/^a-z0-9/g, "");
  if (change === change.split("").reverse().join("")) {
    return `${change}:Yes,This is palindrome`;
  } else {
    return `${change}:No,This is not palindrome`;
  }
};

let string = "run";
console.log(palindrome(string));
