const str =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";

function mostVowelsWord(string) {
  let vowels = [..."aeiouAEIOU"];
  let words = string.split(" ");

  let bestCounter = 0;
  let bestWord;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    //initiate vowel count at 0
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      //if there are vowels in the word, add vowels to counter
      if (vowels.includes(char)) {
        counter++;
      }
    }

    //check to see if it's better than the best word
    if (counter > bestCounter) {
      bestCounter = counter;
      bestWord = word;
    }
  }
  return bestWord;
}

console.log(mostVowels(str.replace(/[^a-zA-Z ]/g, "")));
