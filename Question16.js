// Write a JS Program to search all occurances of a character in given string.

function Search(string) {
  let SearchResult = string.match(/a/gi);
  return SearchResult;
}

function AllOccurrences(str, char) {
  let AllOccurrencesResult = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      AllOccurrencesResult.push(i);
    }
  }

  return `The Character occur at (${AllOccurrencesResult.join(", ")})`;
}

let str = "My name is Amna.I m a Student of BS Computer Science";
console.log(Search(str), AllOccurrences(str, "a"));
