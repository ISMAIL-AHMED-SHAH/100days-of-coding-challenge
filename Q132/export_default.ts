//export default
//you can use this function and import it by any name you want
//it is used for single import

function findVowel(str: string) {
    let vowels = "aeiou";
    for (let i of str) {
      if (vowels.includes(i)) {
        console.log(`Vowel found at ${i}`);
        break;
      }
      console.log(i);
    }
  }
  
  export default findVowel;