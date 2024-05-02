
console.log("\n The 'switch' statement \n");
console.log(" ***with 'break' keyword*** \n");


let a = 2 + 2;

switch (a) {
  case 3:
    console.log( 'Too small' );
    break;
  case 4:
    
  console.log( 'Exactly!' );
    break;
  case 5:
    console.log( 'Too big' );
    break;
  default:
    console.log( "I don't know such values" );
}




console.log("\n\n\n ***without 'break' keyword*** \n");

let b = 2 + 1;

switch (b) {
  case 3:
    console.log( 'Too small' );
  case 4:
    console.log( 'Exactly!' );
  case 5:
    console.log( 'Too big' );
  default:
    console.log( "I don't know such values" );
}




console.log("\n\n\n ***Grouping of “case” *** \n");

let c = 3;

switch (c) {
  case 4:
    console.log('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    console.log('Wrong!');
    console.log("Why don't you take a math class?");
    break;

  default:
    console.log('The result is strange. Really.');
}





console.log("\n\n\N ***Type matters*** \n");

let d = '5';     // Change the value here to test different cases
switch (d) {
  case '0':
  case '1':
    console.log( 'One or zero' );
    break;

  case '2':
    console.log( 'Two' );
    break;

  case '3':
    console.log( 'Three!' );
    break;

  case '4':
    console.log( 'Four!' );
    break;

  case 5:
    console.log( 'Never executes!' );
    break;

  default:
    console.log( 'An unknown value' );
}

console.log("\n\n ***===THE END===*** \n");
console.log("\n ***===THANK YOU===*** \n");

