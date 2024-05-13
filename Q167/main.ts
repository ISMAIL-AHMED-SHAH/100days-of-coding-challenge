console.log("\n\n'==TYPE ANNOTATIONS WITH ARRAY=='\n");


// Annotating an array of strings
let fruits: string[] = ["apple", "banana", "cherry"];

// Function to convert a string to title case
function toTitleCase(str: string): string {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Using a loop to process each element in the array
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit: ${toTitleCase(fruits[i])}`);
}


console.log("\n\n'==TYPE ANNOTATIONS WITH MULTIDIMENSIONAL ARRAYS=='\n");


let arrayOne: number[] = [1, 2, 3, 4, 5];
let arrayTwo: string[] = ["A", "B", "C"];
let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];

console.log(arrayOne); 
console.log(arrayTwo); 
console.log(arrayThree);




console.log("\n\n'ANOTHER EXAMPLES OF MULTIDIMENTIONAL ARRAYS'\n");
// Define a multidimensional array with type annotations
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Accessing elements in the multidimensional array
console.log(matrix[0][0]);
console.log(matrix[1][1]);
console.log(matrix[2][2]);
console.log(matrix[0][2]);


console.log('\n\n');

let mixArray : (number | string) [] [] = [
    [1, 2, 3],
    ['A', 'B', 'C']
]

console.log(mixArray);



console.log('\n\n');

let mixedArray: (string | number)[][] = [
    [1, "A"],
    [2, "B"],
    [3, "C"]
];

// Printing combinations of numbers and strings
for (let i = 0; i < mixedArray.length; i++) {
    let number = mixedArray[i][0];
    let letter = mixedArray[i][1];
    console.log(`${number}${letter}`);
}
console.log('\n\n');

//Accessing perticular array element by index
console.log(mixedArray[2][0]);
console.log(mixedArray[0][1]);



  