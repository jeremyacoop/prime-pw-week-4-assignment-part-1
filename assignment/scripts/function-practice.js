console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {

  return name;
}
// Remember to call the function to test
console.log('Hello, ', helloName('Jeremy'), '!');  

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // since this line does the job, I don't see any reason not to use it
  return firstNumber + secondNumber;
}
console.log('The sum of these 2 numbers is ', addNumbers(2, 14));


// 4. Function to multiply three numbers & return the result
function multiplyThree(numOne, numTwo, numThree){
  return numOne + numTwo + numThree;
}
console.log('The sum of the 3 numbers is ', multiplyThree(1, 2, 3));



// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if ( array===[]) {
    return undefined;
  }else {
    return array[array.length-1];
  }
}
console.log( 'The last item is ', getLast([]));
console.log( 'The last item is ', getLast(['u', 7, '8', 'twelve', 0]));
console.log( 'The last item is ', getLast(['u', 7, '8', 'twelve', 0, '[]']));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function findValue( value, array ){
  for (let i=0; i<array.length; i++) {
    if (array[i] === value) {
      return true;
    }
    
  }
      return false;
}
console.log('Is the value here? ', findValue(12, [ 34, 48, 97]));
console.log('Is the value here? ', findValue(12, [ 34, 48, 97, 12]));
console.log('Is the value here? ', findValue(12, [ 12, 34, 48, 97]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string[0] === letter) {
    return true;
  }else {
    return false;
  }
}// end isFirstLetter
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array ) {
  let sum = 0
  // TODO: loop to add items
  for(let i=0; i<array.length; i++) {
    sum += array[i];
  }
  return sum;
}// end sumAll
console.log('Sum of array ', [0, 9, 7, 4], 'is ', sumAll([0, 9, 7, 4]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function returnPositive(numArray) {
  let newArray = [];
  for (i=0; i<numArray.length; i++) {
    if (numArray[i] > 0) {
      newArray.push(numArray[i]);
    }
  }
  return newArray;
}

let exampleArray = [0, -1, -5, 1, 8, 99, -1000]
console.log('The positive numbers in this array\: ', exampleArray); 
console.log('   are ', returnPositive(exampleArray));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
