// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
// Mixed list of items
var mixedList = [10, "apple", 3.14, "banana", true, null, "cherry"];
// Filtering to keep only strings
var stringList = mixedList.filter(function (item) { return typeof item === 'string'; });
console.log("Original list:", mixedList);
console.log("List containing only strings:", stringList);
