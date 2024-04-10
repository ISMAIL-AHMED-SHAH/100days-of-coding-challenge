// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
  function findFirstVowel(text: string): string | null {
    const vowels = "aeiouAEIOU";
  
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (vowels.includes(char)) {
        return char; // Return the first vowel found
      }
    } 
    return null; // No vowel found  
  }
  
  let someText = "Gym myrrh lynx fly by";
  let firstVowel1 = findFirstVowel(someText);
  
  if (firstVowel1) {
    console.log("First vowel found in 'Gym myrrh lynx fly by':", firstVowel1);
  } else {
    console.log("No vowels found in 'Gym myrrh lynx fly by'.");
  }  
  let someText1 = "Sentence with vowels!";
  let firstVowel2 = findFirstVowel(someText1);
  
  if (firstVowel2) {
    console.log("\nFirst vowel found in 'Sentence with vowels!':", firstVowel2);
  } else {
    console.log("\nNo vowels found in 'Sentence with vowels!'.");
  }
  