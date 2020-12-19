// // // // // // 'use strict';

// // // // // // let hasDriversLicense = false;
// // // // // // const passTest = true;

// // // // // // console.log(hasDriversLicense = true ? `I can drive` : `you cannot drive`);

// // // // // // ----------------------------

// // // // // // 'use strict';

// // // // // // function logger () {
// // // // // //     console.log(`My name is Jonas`);
// // // // // // }

// // // // // // logger()

// // // // // // function fruitProcessor(apples, oranges) {
// // // // // //     console.log(apples, oranges)
// // // // // //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
// // // // // //     return juice
// // // // // // }

// // // // // // const appleJuice = fruitProcessor(5, 0);
// // // // // // console.log(appleJuice)

// // // // // // const appleOrangeJuice = fruitProcessor(2, 4);
// // // // // // console.log(appleOrangeJuice)

// // // // // // // ----------------------------

// // // // // // 'use strict';

// // // // // // // Function Declaration
// // // // // // function calcAge1(birthYear) {
// // // // // //     return 2037 - birthYear
// // // // // // }

// // // // // // const age1 = calcAge1(1991);
// // // // // // console.log(age1)

// // // // // // // Function Expression
// // // // // // const calcAge2 = function (birthYear) {
// // // // // //     return 2037 - birthYear;
// // // // // // }

// // // // // // const age2 = calcAge2(1991);
// // // // // // console.log(age1, age2)

// // // // // // -----------------------------------

// // // // // 'use strict';

// // // // // // Function expression
// // // // // const calcAge2 = function (birthYear) {
// // // // //     return 2037 - birthYear
// // // // // }

// // // // // // Arrow function

// // // // // const calcAge3 = birthYear => 2037 - birthYear
// // // // // const age3 = calcAge3(1991);
// // // // // console.log(age3);

// // // // // const yearsUntilRetirement = (birthYear, firstName) => {
// // // // //     const age = 2037 - birthYear;
// // // // //     const retirement = 65 - age
// // // // //     return `${firstName} retires in ${retirement} years`

// // // // // }

// // // // // console.log(yearsUntilRetirement(1991, "Bob"))

// // // // // -----------------------------------------------

// // // // 'use strict';

// // // // function cutFruitPieces(fruit) {
// // // //     return fruit + 4;
// // // // }

// // // // function fruitProcessor(apples, oranges) {
// // // //     const applePieces = cutFruitPieces (apples);
// // // //     const orangePieces = cutFruitPieces (oranges);

// // // //     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
// // // //     return juice;
// // // // }

// // // // console.log(fruitProcessor(2, 3))

// // // // // -----------------------------------------------
// // // // // Reviewing
// // // // 'use strict';

// // // // const calcAge = function(birthYear) {
// // // //     return 2037 - birthYear;
// // // // }

// // // // const yearsUntilRetirement = function (birthYear, firstName) {
// // // //     const age = calcAge(birthYear);
// // // //     const retirement = 65 - age;

// // // //     return retirement > 0 ? `${firstName} retires in ${retirement} years` : `${firstName} has already retired`;

// // // // }

// // // // console.log(yearsUntilRetirement(2000, 'Jonas'));

// // // // // -----------------------
// // // // Coding Challenge #4

// // // // The Complete JavaScript Course

// // // // 8

// // // // Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// // // // Your tasks:

// // // // 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

// // // // 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value

// // // // 316.25”

// // // // Test data:

// // // // §

// // // // Data 1: Test for bill values 275, 40 and 430

// // // // Hints:

// // // // § §

// // // // To calculate 20% of a value, simply multiply it by 20/100 = 0.2 Value X is between 50 and 300, if it's >= 50 && <= 300 😉

// // // // GOOD LUCK

// // // // 😀 The Complete JavaScript Course

// // // // 9

// // // // JavaScript Fundamentals – Part 2

// // // // Coding Challenge #1

// // // // Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// // // // Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// // // // A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// // // // Your tasks:

// // // // 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

// // // // 2. Use the function to calculate the average for both teams

// // // // 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"

// // // // 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2

// // // // 5. Ignore draws this time

// // // // Test data:

// // // // § §

// // // // Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// // // // Hints:

// // // // § §

// // // // To calculate average of 3 values, add them all together and divide by 3 To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

// // // // GOOD LUCK 😀

// // // const dolphinsScore1 = 44;
// // // const dolphinsScore2 = 23;
// // // const dolphinsScore3 = 71;
// // // const koalasScore1 = 65;
// // // const koalasScore2 = 54;
// // // const koalasScore3 = 49;

// // // const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// // // const checkWinner = function (avgDolphins, avgKoalas) {
// // //     if (avgDolphins >= 2*avgKoalas) {
// // //         return console.log(`Dolphins wins ${avgDolphins} vs. ${avgKoalas}.`)
// // //     } else {
// // //         return console.log(`Koalas wins ${avgKoalas} vs. ${avgDolphins}.`)
// // //     }
// // //     // return console.log(avgDolphins >= (2*avgKoalas) ? `Dolphins wins ${avgDolphins} vs. ${avgKoalas}.` : `Koalas wins ${avgKoalas} vs. ${avgDolphins}`);
// // // }

// // // const avgDolphins = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
// // // const avgKoalas = calcAverage(koalasScore1, koalasScore2, koalasScore3);
// // // checkWinner()

// // // // -------- solution
// // 'use strict';

// // const calcAverage = (a, b, c) => (a + b + c) / 3;
// // console.log(calcAverage (3, 4, 5));

// // //test 1
// // const scoreDolphins = calcAverage(44, 23, 71);
// // const scoreKoalas = calcAverage(65, 54, 49);
// // console.log (scoreDolphins, scoreKoalas);

// // const checkWinner = function(avgDolphins, avgKoalas) {
// //     return console.log(avgDolphins >= 2*avgKoalas ? `Dolphins wins ${scoreDolphins} vs. ${scoreKoalas}` : avgKoalas >= 2* avgDolphins ? `Koalas wins ${scoreKoalas} vs. ${scoreDolphins}` : `Nobody wins`);
// // }

// // checkWinner(scoreDolphins, scoreKoalas)

// // ----------------------------------

// // Arrays
// 'use strict';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1992, 1993); //called a function to build
// console.log(years);

// console.log(friends[0], years[1])

// console.log(friends.length)
// console.log(friends[friends.length - 1]) //getting the last element

// friends[friends.length - 1] = 'Jay';
// console.log(friends)

// // ---------------------------

// // Array Methods

// const friends = ['michael', 'pete', 'steven'];

// // adding elements
// friends.push('jay') //add last
// console.log(friends)

// friends.unshift('john'); //add first
// console.log(friends)

// // removing elements

// friends.pop(); //remove last
// console.log(friends)

// friends.shift(); //remove first
// console.log(friends)

// // find position of elements in the array

// console.log(friends.indexOf('pete')) // serach the position of the element
// console.log(friends.includes('pete')) // if an element is in the array

// friends.includes('pete') ? console.log(` you have a friends called pete`) : console.log(`forget it`);

// -------------------------
// // Coding Challenge
// The Complete JavaScript Course

// 10

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100

// 2. And now let's use arrays! So create an array 'bills' containing the test data below

// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before

// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip

// Test data: 125, 555 and 44 Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

// const bill = 200;

// // setting the arrow function with ternare operator
// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// // initializing variables
// const bills = [];
// const tips = [];

// //adding bills and tips to arrays
// bills.push(125, 555, 44);
// tips.push(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));

// //adding total
// const total = [];
// total.push(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]);
// console.log(bills, tips, total);

// // --------------------------------

// // Introduction to Objects

// "use strict";

// const jonasArray = [
//   "Jonas",
//   "Schmedtman",
//   2037 - 1991,
//   "teacher",
//   ["michael", "peter", "steven"],
// ];

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["michael", "peter", "steven"],
// };

// --------------------------------
// dot notation vs bracket notation

// "use strict";

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["michael", "pete", "jay"],
// };

// console.log(jonas);
// console.log(jonas.lastName); // dot notation
// console.log(jonas["lastName"]); // bracket notat

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "what do you want to know about jonas? choose betwen firstName, lastName, age, job, and friends"
// );

// console.log(jonas[interestedIn]); //return job

// jonas[interestedIn]
//   ? console.log(jonas[interestedIn])
//   : console.log("wrong request");

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";

// console.log(jonas);

// console.log(
//   `jonas has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );

// // --------------------

// "use strict";
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   // calcAge: function () {
//   //   console.log(this); // 'this' is pointing to the object 'jonas'
//   //   return 2037 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} years old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//   },
// };

// // console.log(jonas.calcAge(1991));
// // console.log(jonas.age);
// // console.log(jonas["calcAge"](1991));
// console.log(jonas.getSummary());

// ----------------------------

// Coding Challenge #3

// The Complete JavaScript Course

// 11

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

// Your tasks:

// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)

// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method

// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

// GOOD LUCK 😀

// "use strict";

// // BMI = mass / height ** 2;

// const mark = {
//   firstName: "mark",
//   lastName: "miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     return Math.round(this.mass / this.height ** 2);
//   },
// };

// const john = {
//   firstName: "john",
//   lastName: "smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     return Math.round(this.mass / this.height ** 2);
//   },
// };

// console.log(
//   `${
//     mark.calcBMI() > john.calcBMI()
//       ? `mark ${mark.calcBMI()} has the highest BMI than john's ${john.calcBMI()}`
//       : `john ${john.calcBMI()} has the highest BMI than mark's ${mark.calcBMI()}`
//   }`
// );

// ------------------------------------

// Loops

// for loops keep running while condition is TRUE

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weights repetition ${rep}`);
// }

// const jonasArray = [
//   "jonas",
//   "schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["michael", "pete", "steven"],
//   true,
// ];

// const types = [];
// const jonas = [];
// const jonas2 = [];

// for (let i = 0; i < jonasArray.length; i++) {
//   console.log(jonasArray[i], typeof jonasArray[i]);
//   types[i] = typeof jonasArray[i];
//   jonas[i] = jonasArray[i + 2];
//   jonas2.push(jonas[i - 1]);
// }

// console.log(types);
// console.log(jonas);
// console.log(jonas2);

// const years = [];
// const yearsUpsideDown = [];

// for (let i = 1991; i < 2020; i++) {
//   years.push(i);
//   yearsUpsideDown.unshift(i);
// }

// console.log(years);
// console.log(yearsUpsideDown);

// const ages = [];

// for (let i = 1991; i <= years.length; i++) {
//   //not working
//   ages.push(years[i] - 1991);
// }

// console.log(ages);

// // continue and break

// console.log("----Only Strings ----");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue; //only log strings to the console
//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log("----break with number -----");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break; //after number found, loop breaks
//   console.log(jonas[i], typeof jonas[i]);
// }

// ------------------------------
// backward loops

// const jonas = [
//   "jonas",
//   "schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["michael", "peter", "steven"],
//   true,
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`exercise`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`repetition`);
//   }
// }

// ------------------------------
// while loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`FOR Lifting weights repetition ${rep}`);
// }

// in a while loop we need to specify the beginning condition and the variation separeted, with the starting condition being defined above the loop and the variation at the end of the loop
// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE Lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1; //trunc because it will trunc on five and then we add 1 to get six
// console.log(dice);

// while (dice !== 6) {
//   console.log(`you rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   dice === 6 ? `loop is about to end`;
// }

//when you know, beforehand, how many iterations you will need, use a for loop.
// when you don't know how many iterations you will need, use a while loop

// -----------------
// Coding Challenge #4

// The Complete JavaScript Course

// 12

// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:

// 1. Create an array 'bills' containing all 10 test bill values

// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')

// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays 😉

// Bonus:

// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:

// 4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together

// 4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)

// 4.3. Call the function with the 'totals' array

// GOOD LUCK 😀

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const total = [];

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// // Practice
// // const calcTip2 = (bill) =>
// //   bill >= 5 && bill <= 300 ? bill * 0.2 : bill * 0.15;

// //Test 1
// // const test1 = calcTip(bills[8]);
// // const test2 = calcTip2(bills[8]);

// // console.log(test1, typeof test1);
// // console.log(test2, typeof test2);

// for (i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
// }

// // Test 2
// // console.log(bills, tips);

// for (i = 0; i < bills.length; i++) {
//   total.push(bills[i] + tips[i]);
// }

// console.log(tips, bills, total);

// // calcAverage

// let sum = 0;
// const calcAverage = function (arr) {
//   for (i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i];
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcAverage(bills));

