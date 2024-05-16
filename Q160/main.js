
console.log("\n***FUNCTIONS***\n");


function showMessage() {
    console.log( '**Hello Codersss!**' );
  }
  
  showMessage();
  showMessage();


console.log("\n 'Local variables' \n");

function showMessage2() {
    let message = "Hello, I'm New Coder!"; // local variable
    
    console.log( message );
}

showMessage2(); // Hello, I'm JavaScript!

//  alert( message ); // <-- Error! The variable is local to the function



console.log("\n 'Outer variables' \n");

let userName = 'Mano';

function showMessage3() {
  let message = 'Hello, ' + userName;
  console.log(message);
}

showMessage3(); // Hello, Mano

console.log("\n \n \n");

let userName2 = 'Mano';

function showMessage4() {
  userName2 = "Mini";   // (1) changed the outer variable

  let message = 'Hello, ' + userName2;
  console.log(`\n${message}`);
}

console.log( `${userName2}` );   // Mano before the function call

showMessage4();

console.log( `\n${userName2}` );   // Mini, the value was modified by the function



let userName3 = 'Mano';

function showMessage5() {
  let userName3 = "Mini"; // declare a local variable

  let message2 = 'Hello, ' + userName3; // Bob
  console.log(message2);
}

// the function will create and use its own userName3
showMessage5();

console.log( `\n${userName3}` ); // John, unchanged, the function did not access the outer variable



console.log("\n \n '===Parameters===' \n");
//  We can pass arbitrary data to functions using parameters.


function showMessage6(from, text) { // parameters: from, text
    console.log(from + ': ' + text);
  }
  
  showMessage6('Aenny', 'Hello!'); // Ann: Hello! (*)
  showMessage6('Aenny', "What's up?"); // Ann: What's up? (**)

  console.log("\n \n ");

  function showMessage7(from, text) {

    from = '*' + from + '*'; // make "from" look nicer
  
    console.log( from + ': ' + text );
  }
  
  let from = "Aenny";
  
  showMessage7(from, "Hello"); // *Ann*: Hello
  
  // the value of "from" is the same, the function modified a local copy
  console.log( `\n${from}` ); // Ann



  console.log("\n \n 'Default Values'\n ");
  
  function showMessage8(from, text = "no text given") {
    console.log( from + ": " + text );
  }
  
  showMessage8("Aenny"); // Aenny: no text given
  
  
  console.log("\n \n 'Alternative default parameters'\n ");
  //   We can check if the parameter is passed during the function execution, by comparing it with undefined:
  function showMessage9(text) {
    // ...
    
    if (text === undefined) { // if the parameter is missing
      text = 'empty message';
    }
    
    console.log(text);
  }
  
  showMessage9(); // empty message
  
  
  console.log("\n'\n ");
  //  using nullish coalescing operator ??, it’s better when most falsy values, such as 0, should be considered “normal”:
  
  function showCount(count) {
    // if count is undefined or null, show "unknown"
    console.log(count ?? "unknown");
  }
  
  showCount(0); // 0
  showCount(null); // unknown
  showCount(); // unknown
  
  
  console.log("\n'===Returning a value==='\n ");
  //.  There may be many occurrences of return in a single function.
  function sum2(a, b) {
    return a + b;
  }
  
  let result = sum2(1, 2);
  console.log( result ); // 3
  
  
  console.log("\n \n ");
  
  function doNothing() {
    
    return;
    
  }
  
  console.log( doNothing() === undefined ); // true
 
  
  
  console.log("\n \n ");
// Immediately invoked Function Expression  (IIFE)

  (function(){
    console.log("Run immediately");
  })();
  


  console.log("\n \n ");
  // Recursive Functions
  function countDown(number) {
    if (number <= 0) {
      console.log("Done!");
      return;
    }
    console.log(number);
    countDown(number - 1);
  }
  countDown(5);
  
  
  console.log("\n \n ");
  
  function factorial(p) {
    if (p == 0) {
      return 1;
    }
    return p * factorial(p-1)
  } 
  let respose = factorial(5);
  console.log(respose);
  
  
  
  console.log("\n'===Nested Function===' \n ");

  function outerFunction() {
    const innerFunction = function(){
      console.log("Hello i'm inside!");
    }
    innerFunction()
  }
  outerFunction();

  




  // function showPrimes(n) {
  //   nextPrime: for (let i = 2; i < n; i++) {
  
  //     for (let j = 2; j < i; j++) {
  //       if (i % j == 0) continue nextPrime;
  //     }
  
  //     console.log( i ); // a prime
  //   }
  // }


  // function showPrimes1(m) {

  //   for (let i = 2; i < m; i++) {
  //     if (!isPrime(i)) continue;
  
  //     console.log(i);  // a prime
  //   }
  // }
  
  // function isPrime(m) {
  //   for (let i = 2; i < m; i++) {
  //     if ( m % i == 0) return false;
  //   }
  //   return true;
  // }








// Regards,

// ISMAIL AHMED SHAH

// Operations (Yard Planning) 

//  Karachi International Container Terminal Limited

// Tel: + 92 21 111 542 850 (Ext: 310/309)

// Mobile: +92 345 6063961 / +92 332 2241405

// Fax: + 92 21 3231627

