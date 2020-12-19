// // // // CODE WARS

// // // // Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// // // // Example:

// // // // createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// // // // The returned format must be correct in order to complete this challenge.
// // // // Don't forget the space after the closing parentheses!

// // // // const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// // // // console.log(arr);
// // // // const createPhoneNumber = function (arr) {
// // // //   return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`;
// // // // };

// // // // console.log(createPhoneNumber(arr));

// // // // const createPhoneNumber = (arr) =>
// // // //   `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`;

// // // // console.log(createPhoneNumber(arr));
// // // // ----------------

// // // // Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// // // // Example: divisors(12); // should return [2,3,4,6]
// // // // divisors(25); // should return [5]
// // // // divisors(13); // should return "13 is prime"

// // // // MY SOLUTION
// // // // let i = 1;
// // // // const array = [];

// // // // const divisors = function (n) {
// // // //   while (Math.floor(n / 2) >= i) {
// // // //     if (n % i === 0) {
// // // //       array.push(i);
// // // //     }
// // // //     i++;
// // // //   }
// // // //   if (array.length) {
// // // //     array.shift();
// // // //     return array;
// // // //   } else {
// // // //     return `${n} is prime`;
// // // //   }
// // // // };

// // // // console.log(divisors(25));

// // // // from Code Wars

// // // // function divisors(integer) {
// // // //   const res = [];
// // // //   for (var i = 2; i <= Math.floor(integer / 2); ++i)
// // // //     if (integer % i == 0) res.push(i);
// // // //   return res.length ? res : integer + " is prime";
// // // // }

// // // // ------------
// // // // Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// // // // Examples input/output:

// // // // XO("ooxx") => true
// // // // XO("xooxx") => false
// // // // XO("ooxXm") => true
// // // // XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// // // // XO("zzoo") => false

// // // // const str = "a";

// // // // const array = str.split("");
// // // // let o = 0;
// // // // let x = 0;

// // // // const XO = function (str) {
// // // //   for (let i = 0; i <= array.length - 1; i++) {
// // // //     if (array[i] === "o") {
// // // //       o += 1;
// // // //     }
// // // //   }
// // // //   const x = array.length - o;
// // // //   return (o && o) === (x && x.length);
// // // // };

// // // // console.log(XO(str));

// // // // codewars solution

// // // // function XO(str) {
// // // //   let x = str.match(/x/gi);
// // // //   let o = str.match(/o/gi);
// // // //   return (x && x.length) === (o && o.length);
// // // // }

// // // // ------------------

// // // // You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// // // // For example:

// // // // Let's say you are given the array {1,2,3,4,3,2,1}: Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// // // // Let's look at another one.
// // // // You are given the array {1,100,50,-51,1,1}: Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// // // // Last one:
// // // // You are given the array {20,10,-80,10,10,15,35}
// // // // At index 0 the left side is {}
// // // // The right side is {10,-80,10,10,15,35}
// // // // They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// // // // Index 0 is the place where the left side and right side are equal.

// // // // Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

// // // // Input:
// // // // An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// // // // Output:
// // // // The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// // // // Note:
// // // // If you are given an array with multiple answers, return the lowest correct index.

// // // // // setting an array for testing
// // // // const arr = [1, 2, 3, 4, 3, 2, 1];

// // // // // testing the reduce method
// // // // console.log(arr.reduce((a, b) => a + b, 0));

// // // // let sumArray = arr.reduce((a, b) => a + b, 0);

// // // // // finding if the function will return the sum or -1

// // // // const findEvenIndex = function (arr) {
// // // //   let sumArray = arr.reduce((a, b) => a + b, 0);
// // // //   let count = 0;
// // // //   let bigSum = 0;

// // // //   for (let i = 0; i <= arr.length - 1; i++) {
// // // //     bigSum = bigSum[i] + i;
// // // //   }
// // // //   console.log(`bigsum`, bigSum);
// // // //   if (bigSum % 2 === 0) {
// // // //     for (let i = 0; i <= (arr.length - 1) / 2; i++) {
// // // //       if (bigSum < sumArray / 2) {
// // // //         bigSum += i;
// // // //         count = i;
// // // //       } else {
// // // //         break;
// // // //       }
// // // //     }
// // // //     return count;
// // // //   } else {
// // // //     return -1;
// // // //   }
// // // // };

// // // // console.log(findEvenIndex(arr));

// // // // -----------

// // // // You get an array of numbers, return the sum of all of the positives ones.

// // // // Example [1,-4,7,12] => 1 + 7 + 12 = 20

// // // // Note: if there is nothing to sum, the sum is default to 0.

// // // // console.log(toCamelCase(str));

// // // // arr = [1, -4, 7, 12];

// // // // const positiveSum = function (arr) {
// // // //   let arrSum = 0;
// // // //   for (let i = 0; i <= arr.length - 1; i++) {
// // // //     if (arr[i] > 0) {
// // // //       arrSum += arr[i];
// // // //     }
// // // //   }
// // // //   return arrSum;
// // // // };

// // // // console.log(positiveSum(arr));

// // // // -------------
// // // // In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// // // // // Example:

// // // // const num = 12;

// // // // const makeNegative = function (num) {
// // // //   return num < 0 ? (num = num) : num * -1;
// // // // };

// // // // console.log(makeNegative(-0.12)); // return -1
// // // // makeNegative(-5); // return -5
// // // // makeNegative(0); // return 0
// // // // makeNegative(0.12); // return -0.12

// // // // ---------------------
// // // // Complete the solution so that it reverses the string passed into it.

// // // const str = "dlrow";
// // // // // console.log(str.split(""));
// // // // function solution(str) {
// // // // }
// // // // return tempStr;
// // // // }

// // // // console.log(solution(str));
// // // // console.log(tempStr);

// // // // testing out of the function
// // // // let tempArr = [];
// // // // let tempStr = 0;
// // // // tempStr = str.split("");
// // // // for (let i = tempStr.length - 1; i >= 0; i--) {
// // // //   tempArr.push(str[i]);
// // // // }
// // // // tempArr = tempArr.join("");
// // // // console.log(tempArr);

// // // // correct
// // // // function solution(str) {
// // // //   let tempArr = [];
// // // //   let tempStr = 0;
// // // //   tempStr = str.split("");
// // // //   for (let i = tempStr.length - 1; i >= 0; i--) {
// // // //     tempArr.push(str[i]);
// // // //   }
// // // //   tempArr = tempArr.join("");
// // // //   return tempArr;
// // // // }

// // // // -----

// // // // Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// // // const number = 7;
// // // const even_or_odd = (number) => (number % 2 === 0 ? `Even` : `Odd`);

// // // console.log(even_or_odd(9));

// // // -----------------------

// // // Summation

// // // Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// // // For example:

// // // summation(2) -> 3
// // // 1 + 2

// // // summation(8) -> 36
// // // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// // // const summation = function (num) {
// // //     let arr = [1, num];

// // //     if

// // // }

// // // const summation = function (num) {
// // //   let arr = [];
// // //   // building an Array with the Num - 1
// // //   let numTemp = num;
// // //   while (numTemp > 0) {
// // //     numTemp = numTemp - 1;
// // //     arr.push(numTemp);
// // //   }

// // //   // sorting the array
// // //   arr.sort(function (a, b) {
// // //     return a - b;
// // //   });

// // //   // sum itens until their sum = num

// // //   let sum = 0;
// // //   let newArr = [];
// // //   // let z = 0;
// // //   for (let z = 0; sum <= num; z++) {
// // //     sum += arr[z];
// // //     newArr.push(z);
// // //     console.log(z);
// // //   }
// // //   sum = sum - newArr[newArr.length - 1];
// // //   return sum;
// // // };

// // // console.log(summation(36));
// // // const num = 8;

// // // const summation = function (num) {
// // //   // setting variables
// // //   let arr = [];
// // //   let numTemp = num;
// // //   let newSum = 0;

// // //   // building an Array with the Num -1
// // //   while (numTemp > 0) {
// // //     numTemp -= 1;
// // //     arr.push(numTemp);
// // //   }
// // //   arr.push(num); // adding back the num

// // //   //sorting
// // //   arr.sort((a, b) => a - b);

// // //   //finding the sum
// // //   for (let i = 0; i <= arr.length - 1; i++) {
// // //     newSum += arr[i];
// // //   }

// // //   return newSum;
// // // };

// // // console.log(summation(8));

// // // -------------------

// // // Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// // // For example,

// // let arr = [
// //   true,
// //   true,
// //   true,
// //   false,
// //   true,
// //   true,
// //   true,
// //   true,
// //   true,
// //   false,
// //   true,
// //   false,
// //   true,
// //   false,
// //   false,
// //   true,
// //   true,
// //   true,
// //   true,
// //   true,
// //   false,
// //   false,
// //   true,
// //   true,
// // ];

// // function countSheeps(arrayOfSheep) {
// //   let sum = 0;
// //   for (let i = 0; i <= arr.length - 1; i++) {
// //     if (arr[i] === true) {
// //       sum += 1;
// //     }
// //   }
// //   return sum;
// // }
// // console.log(countSheeps(arr));

// // ----------
// // Convert number to reversed array of digits

// // Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// // Example:

// // 348597 => [7,9,5,8,4,3]

// let arr = [];
// let num = 348597;

// num = num.toString().split("").map(Number).reverse();
// // console.log(num);

// const digitalize = (num) => num.toString().split("").map(Number).reverse();

// ---------------

// A square of squares

// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task

// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples

// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

// const n = 16;

// let square = n ** (1 / 2);

// console.log(square);
// console.log(Number.isInteger(square) ? true : false);

// const isSquare = (n) => (Number.isInteger(n ** (1 / 2)) ? true : false);

// console.log(isSquare(16));

// -------------------

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

// the function nbYear should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)

// Examples:
// nbYear(1500, 5, 100, 5000) -> 15
// nbYear(1500000, 2.5, 10000, 2000000) -> 10
// Note: Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

// const nbYear = function (p0, percent, aug, p) {
//   // 1) if percent = integer, convert percent  float
//   percent = percent / 100;

//   // 2) Build the growth equation
//   let newPopulation = 0;
//   const arrayPop = [];
//   newPopulation = p0 + p0 * percent + aug;
//   arrayPop.push(newPopulation);

//   // 3) calculate how long will take to surpass p

//   let count = 0;
//   let i = 0;
//   while (arrayPop[arrayPop.length - 1] < p) {
//     arrayPop.push(arrayPop[i] + arrayPop[i] * percent + aug);
//     count += 1;
//     i++;
//   }
//   return count + 1;
// };

function nbYear(p0, percent, aug, p) {
  for (var i = 0; p0 <= p; i++) p0 = p0 * (1 + percent / 100) + aug;
  return i;
}

// // Examples:
console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1500000, 0.25, 1000, 2000000));
