// 21. Write a js program to remove first occurrence of a character from string

function removeFirst(str, char) {
  firstOccurrence = str.indexOf(char);
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char && i === firstOccurrence) {
      return str.slice(0, i) + str.slice(i + 1);
    }
  }
}

let string = "Inside a book I am not free";
console.log(removeFirst(string, "o"));
