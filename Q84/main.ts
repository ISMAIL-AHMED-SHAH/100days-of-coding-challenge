// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".

// This function swaps "JavaScript" with "TypeScript" in a sentence
function replaceWord(sentence: string): string {
    return sentence.replace(/JavaScript/g, "TypeScript");
     // Uses a regular expression with the 'g' flag for a global replacement
}

let originalSentence = "JavaScript is a popular programming language. Many developers love JavaScript.";
let replacedSentence = replaceWord(originalSentence);
console.log("Original Sentence:", originalSentence);
console.log("Replaced Sentence:", replacedSentence);
