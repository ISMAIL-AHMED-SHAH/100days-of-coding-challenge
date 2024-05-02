
// LOOPS
console.log('\n LOOPS \n');

// While the condition is truthy, the code from the loop body is executed.
// increment in while loop
let a = 0;
while (a < 3) { // shows 0, then 1, then 2
  console.log( a );
  a++;
}

console.log('\n');
// decrement in while loop
let b = 3;
while (b) {
 console.log(b);
 b--;   
}


console.log('\n');
let c = 3;
while (c) console.log(c--);


console.log('\n');
let d = 0;
do {
    console.log(d);
    d ++
} while (d < 5);


console.log('\n');

for (let e = 0; e <= 3; e++){
    console.log(`the value of e is ${e}`);
}
// console.log(i);   // if run will throw error

console.log('\n');
let f = 0;
for (f = 0; f <3; f++) {
    console.log(f);
    
}
console.log('\n');
console.log(f);



console.log("\n\n");
// Skipping parts

let g = 0;    // we have 'g' already declared and assigned

for (; g < 3; g++) { // no need for "begin"
  console.log( g ); // 0, 1, 2
}

console.log('\n');
let h = 0;
for (; h < 3;) {
    console.log(h++);
    
}

// let j = 0;
// for (;;) {              //  repeats without limits
//     console.log(h++);
    
// }

console.log("\n'for loop'\n");

for (let m = 0;  m <= 10; m++) {
    const element = m;
    if (element == 5) {
        console.log("Four is the best '4' ");
    }
    console.log(element);
}




// let sum = 0;

// while (true) {
//     let value = +prompt ("Enter a number", '');
//     if (!value) break;
//     sum += value;
// }
// console.log('Sum: ' + sum);


console.log("\n\n");
// while loop
let languages = ['TypeScript', 'JavaScript', 'Python', 'Ruby','C++']
 let arr= 0
while (arr < languages.length) {
    console.log(`Value is ${languages[arr]}`);
    arr = arr +1
}




console.log("\n\n");

let score = 1
do {
    console.log(`Score is ${score}`);
    score++
} while (score<=10);



console.log("\n\n Values of Object");
let obj = {
    name: "ISMAIL AHMED SHAH",
    age: 31,
    type: "Dangerous Programmer",
    location: "Karachi"

}
for(let key in obj){
    console.log(`${key} ":" ${obj[key]}`);
}


console.log("\n\n");
for (let m = 0;  m <= 10; m++) {
    const element = m;
    if (element == 5) {
        console.log("Four is the best '4' ");
    }
    console.log(element);
}


console.log("\n\n'NESTED LOOP");
// Nested Loop

for (let n = 0; n <= 3; n++) {
    console.log(`Outer loop value: ${n}`);
    for (let p = 0; p <= 3; p++) {
        console.log(`Inner loop value ${p} and inner loop ${n}`);
        
    }
}

console.log("\n 'Tables in Loop' \n");
for (let r = 1; r <= 4; r++) {
    console.log(`Table Of: ${r}`);
    for (let q = 1; q <= 10; q++) {
        console.log(r + ' x ' + q + ' = ' + r*q);
        
    }
    
    
}

console.log("\n\n");
for (let g = 1; g <=10; g++) {
    let tableNumber=4
    console.log(tableNumber, "x", g, "=", tableNumber*g);
    
}


console.log("\n\n 'BREAKING THE LOOP WITH BREAK KEYWORD'\n");

for (let s = 1; s < 10 ; s++) {
    if (s == 4) {
        console.log('Number 4 Detected');
        break
    }
    console.log(`Value of s is ${s}`);
    
}

console.log("\n\n 'BREAK IN WHILE LOOP'\n");

let k = 0;
do {
    console.log(k + 1);
    if (k===5){
        break;
    }
    k +=1;
} while (k < 10)
console.log('Done');


console.log("'\n'Usage of 'CONTINUE' In Loops \n'");
for (let s = 1; s <= 10 ; s++) {
    if (s == 4) {
        console.log('Number 4 Detected');
        continue
    }
    console.log(`Value of s is ${s}`);
    
}

console.log("\n\n 'BREAK IN NESTED LOOP'\n");

outer: 
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`Processing (${i},${j})...`);
    if (i === 1 && j === 1) {
      console.log("Skipping (1,1)...");
      continue outer; // Skips the current iteration of the outer loop
    }
    if (i === 2 && j === 2) {
      console.log("Breaking at (2,2)...");
      break outer; // Breaks out of both loops
    }
  }
}
console.log('Done!');



console.log("\n\n 'PRINTING EVEN NUMBERS FROM 0 TO 10' \n");
let index = 0;
while (index <= 10) {
    console.log((`Value of index is ${index}`));
    index = index + 2
}

console.log("\n\n 'PRINTING ODD NUMBERS FROM 1 TO 9' \n");
let e = 1;
while (e < 10) {
    console.log(e);
    e = e + 2
}


console.log("\n\n");

// The prefix form ++i:
let x = 0;
while (++x < 5) console.log( x );


console.log("\n\n");

// The postfix form i++
let y = 0;
while (y++ < 5) console.log( y );

console.log("\n\n");
// The postfix form i++
for (let i = 0; i < 5; i++) console.log( i );

console.log("\n\n");

// The prefix form ++i:
for (let i = 0; i < 5; ++i) console.log( i );


console.log("\n\n");
// The postfix form i++
for (let i = 0; i < 3; i++) {
    console.log( `number ${i}!` );
  }


  console.log("\n\n");
//   Output even numbers in the loop
  for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log( i );
    }
  }

  console.log("\n\n");
// Output prime numbers
importance: 3
  let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  console.log( i ); // a prime
}


console.log("\n 'THE END' \n");

