// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

// Mixed list of items
const mixedList: any[] = [10, "apple", 3.14, "banana", true, null, "cherry"];

// Filtering to keep only strings
const stringList = mixedList.filter(item => typeof item === 'string');

console.log("Original list:", mixedList);
console.log("List containing only strings:", stringList);
