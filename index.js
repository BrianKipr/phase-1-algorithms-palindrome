// Write your algorithm here
function reverse(word) {
  const wordArray = word.split("");
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join("");
  return reversedWord; 
}

function isPalindrome(word) {
  const reversedWord = reverse(word)
  if (word === reversedWord ){
    return true
  }else{
    return false
  }
  
}
/*
  //Add your pseudocode here
  Remove any non-alphanumeric letters from the word;
  make a reversed version of the cleaned word;
  compare the two; and, if they are identical, return true (indicating that the word is a palindrome);
  otherwise, return false (indicating that the word is not a palindrome).
*/
/*
//Add written explanation of your solution here
Lowercase the input word to ensure that the function doesn't take into account case when deciding whether a word is a palindrome. We erase any potential variances resulting from letter case by changing the word to lowercase.

Take the word's non-alphanumeric characters away: Palindromes are normally tested by ignoring any other symbols or spaces and only taking into account alphanumeric characters. Any non-alphanumeric characters from the word, such as punctuation or whitespace, are eliminated in this phase. All non-alphanumeric characters in the word are matched and removed using the regular expression /[a-z0-9]/g.

The cleaned word should be created in reverse: We must contrast a word with its reversal to determine if it is a palindrome. In this step, the cleaned word is divided into an array.
*/
//You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
