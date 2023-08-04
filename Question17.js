//  Write a js program to count occurrences of a character in given string.
function countOccurrences(string, char) {
  string = string.toLowerCase();
  let count = 0;
  for (const key of string) {
    if (key === char) {
      count++;
    }
  }
  return count;
}

let string = "Admission Open Now";
console.log(countOccurrences(string, "o"));
