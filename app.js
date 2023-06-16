// STRINGS

// firstVariable = "hello world";
// firstVariable = 1;
// let secondVariable = firstVariable;
// secondVariable = "any string";

// console.log(firstVariable); //1
let firstVariable = "Hello World";
firstVariable = 1;

let secondVariable = firstVariable;
secondVariable = "Any string";

console.log(firstVariable);  
console.log(secondVariable);


// const yourName = "Ariel";
// let hello = `Hello, my name is ${yourName}`
// console.log(hello);
//Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string `"Hello, my name is "` and the variable yourName. 
//ex output: Hello, my name is Jean Valjean
let yourName = "Mona Hassan";
let greeting = "Hello, my name is  " + " " + yourName;

console.log(greeting);

//BOOLEANS

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');

// const a = 4; 
// const b = 53; 
// const c = 57; 
// const d = 16; 
// const e = 'Kevin';

// console.log(a < b); 
// console.log(c > d); 
// console.log('Name' == 'Name');

//FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false); 
// console.log(false && false && false && false && false || true); 
// console.log(false === false) 
// console.log(e == 'Kevin'); 
// console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations) 
// console.log(a == a || d); // note: the answer is a simple arithmetic equation, not something "weird" console.log(48 __ '48');
console.log(a<b || c<d);
console.log(d>b && e==b && d==c && b<a && a==b ||d>a );
console.log(c<d === a>b);
console.log(e =='Kevin');
console.log(a != b != c);
console.log(a == a || d);


//the Farm
let animal = "cow";

const moo = (a) => {
   return a.toLowerCase === "cow"? "mooooo" : "hey, that's not a cow"
} 

console.log(moo(animal));
//Driver's Ed

const age = 20;

if (age >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young.");
}


//LOOPS

//The Basics

//Loop to print numbers from 0 to 10, inclusive:
for (let i = 0; i <= 10; i++) {
   console.log(i);
 }

 //Loop to print numbers from 10 to 400 including 400

 //for (let i = 10; i <= 400; i++) {
  // console.log(i);
// }

 //Loop to print every third number starting from 12 up to 4000
// for (let i = 12; i <= 4000; i += 3) {
 //  console.log(i);
// }

//Get Even
for (let i = 1; i <= 100; i++) {
   if (i % 2 === 0) {
     console.log(i + " <-- is an even number");
   } else {
     console.log(i);
   }
 }

//Give Me 5

for (let i = 0; i <= 100; i++) {
   if (i % 5 === 0 && i % 3 === 0) {
     console.log("I found a number. High five! Three is a crowd");
   } else if (i % 5 === 0) {
     console.log("I found a number. High five!");
   } else if (i % 3 === 0) {
     console.log("I found a number. Three is a crowd");
   } else {
     console.log(i);
   }
 }

//Savings Account
//Write code that will save the sum of all the numbers between 1 - 10 to a variable called `bank_account`.
let bank_account = 0;

for (let i = 1; i <= 10; i++) {
  bank_account += i;
}

console.log(bank_account);

//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
let bank1_account = 0;

for (let i = 1; i <= 100; i++) {
  bank1_account += i * 2;
}

console.log(bank1_account);

//ARRAYS & CONTROL FLOW

//B Create an array that contains three quotes and store it in a variable called quotes
const quotes = [
   "The only way to do great work is to love what you do. - Steve Jobs",
   "In the middle of difficulty lies opportunity. - Albert Einstein",
   "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
 ];
 
 console.log(quotes);



 //#E Mix it up 
 // add Aegon and Hello to the end of the array
 const myArray = [5, 10, 500, 20];

 myArray.push("Aegon");
 myArray.push("Hello");
 console.log(myArray);

 //remove 5 from the begining of the array
 myArray.shift();
 console.log(myArray);

 //Add the string "Bob Marley"to the beginning of the array.

myArray.unshift("Bob Marley");
console.log(myArray);

//Remove the string of your choice from the end of the array.

console.log(myArray.pop());

//Reverse this array using `Array.prototype.reverse()`. 
console.log(myArray.reverse());

//### F. Biggie Smalls
const number = 75; 
if (number < 100) {
  console.log("little number");
} else {
  console.log("big number");
}


//### G. Monkey in the Middle


if (number < 5) {
  console.log("little number");
} else if (number > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}


//##c calculatecube

function calculateCube(number) {
   var volume = Math.pow(number, 3);
   console.log(volume);
 }
 
 calculateCube(5);

 //##b printcool 

 function printCool(name) {
   console.log(name + " is cool");
 }
 
 printCool("Captain Reynolds");
 
 //D vowels

 function isVowel(char) {
   var vowels = ["a", "e", "i", "o", "u"];
   return vowels.includes(char.toLowerCase());
 }
 
 console.log(isVowel("a")); 
 console.log(isVowel("B")); 
 console.log(isVowel("e")); 
 console.log(isVowel("x")); 

 //### E. getTwoLengths
 function getTwoLengths(string1, string2) {
   const length1 = string1.length;
   const length2 = string2.length;
   return [length1, length2];
 }
 
 console.log(getTwoLengths("Hank", "Hippopopalous"));

 // getMultipleLengths
 function getMultipleLengths(array) {
   const lengths = [];
   for (let i = 0; i < array.length; i++) {
     lengths.push(array[i].length);
   }
   return lengths;
 }
 
 console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
 

 //### G. maxOfThree
 function maxOfThree(num1, num2, num3) {
   if (num1 >= num2 && num1 >= num3) {
     return num1;
   } else if (num2 >= num1 && num2 >= num3) {
     return num2;
   } else {
     return num3;
   }
 }
 
 console.log(maxOfThree(6, 9, 1));

 //### H. printLongestWord

 function printLongestWord(words) {
   let longestWord = '';
   
   for (let i = 0; i < words.length; i++) {
     if (words[i].length > longestWord.length) {
       longestWord = words[i];
     }
   }
   
   return longestWord;
 }
 
 console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
//OBJECTS

//### A. Make a user object
const user = {
   name: 'Mona Hassan',
   email: 'MonaHassan@yahoo.com',
   age: 30,
   purchased: []
 };
 // B. Update the user
const updatedUser = Object.assign({}, user); // Create a copy of the user object

// Update the email address
updatedUser.email = "MonaHassan@gmail.com";

// Increment the age
updatedUser.age++;

// C. Adding keys and values
// Add the location key-value pair
const userWithLocation = Object.assign({}, updatedUser);

// D. Shopaholic!
// Add purchased items to the purchased array
userWithLocation.purchased.push("carbohydrates");
userWithLocation.purchased.push("peace of mind");
userWithLocation.purchased.push("Merino jodhpurs");

// Log "Merino jodhpurs" from the purchased array
console.log(userWithLocation.purchased[2]);
console.log(updatedUser);

// E. Object-within-object
userWithLocation.friend = {
   name: "Nora",
   age: 27,
   location: "Florida",
   purchased: [],
 };

 // Console.log just the friend's name
console.log(userWithLocation.friend.name);

// Console.log just the friend's location
console.log(userWithLocation.friend.location);

// CHANGE the friend's age to 55
userWithLocation.friend.age = 55;

// The friend has purchased "The One Ring"
userWithLocation.friend.purchased.push("The One Ring");

// The friend has purchased "A latte"
userWithLocation.friend.purchased.push("A latte");

// Console.log just "A latte" from the friend's purchased array
console.log(userWithLocation.friend.purchased[1]);

// F. Loops
// Iterate over the User's purchased array
for (let i = 0; i < userWithLocation.purchased.length; i++) {
  console.log(userWithLocation.purchased[i]);

}
// Iterate over the Friend's purchased array
for (let i = 0; i < userWithLocation.friend.purchased.length; i++) {
   console.log(userWithLocation.friend.purchased[i]);
 }
 
/// Function to update the user
function updateUser() {
   user.age++;
   user.name = user.name.toUpperCase();
 }
// Call the updateUser function
updateUser();
// Function to perform the same tasks as updateUser, but with a parameter
function oldAndLoud(person) {
   person.age++;
   person.name = person.name.toUpperCase();
 }
 // Call oldAndLoud function with user as the argument
oldAndLoud(user);

// Log the modified user object
console.log(user);

// let longest = array.reduce( (firstEl, secondEl) => {
//         //if the first el is greater than the second el return firstEl
//         return firstEl.length > secondEl.length ? firstEl : secondEl;
//     }
// );

// console.log(longest)


