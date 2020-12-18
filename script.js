"use strict";

// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5, // %
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [20200, -200, 340, -20, 50, 400, -460],
  interestRate: 0.7, // %
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1, // %
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance_value");
const labelSumIn = document.querySelector(".summary_value--in");
const labelSumOut = document.querySelector(".summary_value--out");
const labelSumInterest = document.querySelector(".summary_value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login_btn");
const btnTransfer = document.querySelector(".form_btn--transfer");
const btnLoan = document.querySelector(".form_btn--loan");
const btnClose = document.querySelector(".form_btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login_input--user");
const inputLoginPin = document.querySelector(".login_input--pin");
const inputTransferTo = document.querySelector(".form_input--to");
const inputTransferAmount = document.querySelector(".form_input--amount");
const inputLoanAmount = document.querySelector(".form_input--loan-amount");
const inputCloseUsername = document.querySelector(".form_input--user");
const inputCloserPin = document.querySelector(".form_input--pin");

///////////////////////////////
// Implementing the movement functionality to the app
const displayMovements = function (movements, sort = false) {
  // Delete initial container
  containerMovements.innerHTML = "";
  //Same as doing .textContent = 0

  // implementing the sorting functionality
  // Creating a copy with slice operator because we are in the middle of a chain
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  // Loop through the array of movements of the user
  movs.forEach(function (mov, i) {
    const typeMovement = mov > 0 ? "deposit" : "withdrawal";

    const html = `
        <div class="movements_row">
          <div class="movements_type movements_type--${typeMovement}">${
      i + 1
    } ${typeMovement}</div>
          <div class="movements_value">${mov}€</div>
        </div>
    `;

    // Adding the movements to the HTML
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// const user = "Steven Thomas Williams"; //stw

////////////////////////////////////
//converting name to username (initials)

// 1) Function Create User Names
const createUserNames = (user) =>
  user.forEach(
    (user) =>
      (user.username = user.owner
        .toLowerCase()
        .split(" ")
        .map((name) => name[0])
        .join(""))
  );

// 2) Setting all User Names

createUserNames(accounts);
// console.log(accounts);

// Update UI function
const updateUI = (acc) => {
  // Display Movements
  displayMovements(acc.movements);

  // Display Balance
  displayBalance(acc);

  //Display Summary
  totalInDisplay(acc);
  totalOutDisplay(acc);
  interestDisplay(acc);
};

///////////////////////////////////
// Calculating account balance
// Setting a reduce function to accumulate the account balance
const calcPrintBalance = (acc) =>
  (acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0));

// Implementing the account balance to the application
const displayBalance = (acc) => {
  labelBalance.textContent = calcPrintBalance(acc) + "€";
};

// Total Deposits
const calcDisplaySummary = (movements) =>
  movements.filter((mov) => mov > 0).reduce((acc, cur) => acc + cur, 0);
// Updating Total Deposits in the app
const totalInDisplay = (account) =>
  (labelSumIn.textContent = calcDisplaySummary(account.movements) + "€");

// Total Withdrawal
const calcDisplayWithdrawal = (movements) =>
  movements.filter((mov) => mov < 0).reduce((acc, cur) => acc + cur, 0);
// Implementing functionality

const totalOutDisplay = (account) =>
  (labelSumOut.textContent =
    Math.abs(calcDisplayWithdrawal(account.movements)) + "€");

// Total Interests
const interest = (account) =>
  account.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .filter((mov) => mov >= 1)
    .reduce((acc, cur) => acc + cur, 0);
// Updating the app
const interestDisplay = (account) =>
  (labelSumInterest.textContent = interest(account) + "€");

///////////////////////////////////
// LOGIN
// Event Handler
let currentAccount;

//form auto refreshes page, so we add preventDefault.
btnLogin.addEventListener("click", (event) => {
  // prevent form from submitting
  event.preventDefault();

  // get valued typed by user
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  // check if the pin for the user is the same registered
  // using optional chaining to check if the account exists
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;

    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur(); //field loses the focus

    //works because the assignment operator works from right to left

    // Update UI
    updateUI(currentAccount);
  }
});

// Transfer
btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //Doing the Transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

// Loan
btnLoan.addEventListener("click", (e) => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});
// Close account

btnClose.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputCloserPin.value) &&
    currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );

    // Delete Account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
});

// FIX IT
let sorted = false;
btnSort.addEventListener("click", (e) => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// // PIPELINE
// console.log(movements);
// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * eurToUsd)
//   .reduce((acc, cur) => acc + cur, 0);

// console.log(totalDepositsUSD);

///////////////////////////////////
//LECTURES

// // Map Method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsUSD = movements.map((i) => i * eurToUsd);

// console.log(movements, movementsUSD);

////////////////////////////
// Filter Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter((mov) => mov > 0);
// const withdrawals = movements.filter((mov) => mov < 0);

// //////////////////////////////////////////

// const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0); // start counting at 0
// console.log(balance);

// FIND METHOD

// console.log(movements.find((mov) => mov < 0));

// const account = accounts.find((acc) => acc.owner === "Jessica Davis");
// console.log(account);

////////////

// Creating array programatically

// const y = Array.from({ length: 7 }, () => 1); // [1, 1, 1, 1, 1, 1, 1]

// const z = Array.from({ length: 7 }, (_, i) => i + 1); // [1, 2, 3, 4, 5, 6, 7]

// console.log(y, z);

// // Getting the elements from movements and creating a new array of numbers without the symbol.
// labelBalance.addEventListener("click", () => {
//   const movementsUI = Array.from(
//     document.querySelectorAll(".movements_value"),
//     (el) => Number(el.textContent.replace("€", ""))
//   );
//   console.log(movementsUI);
// });

//////
// Coding Challenge #4

// The Complete JavaScript Course

// 25

// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.

// Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.

// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

// Your tasks:

// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },

//   { weight: 8, curFood: 200, owners: ["Matilda"] },

//   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },

//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// let owners = [];
// dogs.forEach((dogs) => owners.push(dogs.owners));

// dogs.forEach((i) => (i.foodPortion = Math.round(i.weight ** 0.75 * 28)));
// // console.log(dogs);

// // 2. Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

// const dogSarah = dogs.find((dogs) => dogs.owners.includes("Sarah"));

// // console.log(dogSarah);

// // console.log(
// //   dogSarah.curFood > dogSarah.foodPortion
// //     ? `Sara's dog is eating ${
// //         Number(dogSarah.curFood) - Number(dogSarah.foodPortion)
// //       } grams more than reccomended. `
// //     : `Sarah's dog is not eating enough.`
// // );

// // 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

// let ownersEatTooMuch = dogs
//   .filter((dogs) => dogs.foodPortion > dogs.curFood)
//   .map((dogs) => dogs.owners)
//   .flat();
// let ownersEatTooLittle = dogs
//   .filter((dogs) => dogs.curFood > dogs.foodPortion)
//   .map((dogs) => dogs.owners)
//   .flat();

// console.log(ownersEatTooMuch);
// console.log(ownersEatTooLittle);
// // 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

// console.log(`${ownersEatTooMuch.join(", and ")}'s dogs eat too much! and
// ${ownersEatTooLittle.join(", and ")}'s dogs eat too little!`);

// // 5. Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)

// console.log(dogs.some((dogs) => dogs.curFood - dogs.foodPortion === 0));

// // 6. Log to the console whether there is any dog eating an okay amount of food (just true or false)
// const checkEatingOk = (dogs) =>
//   dogs.foodPortion * 1.1 > dogs.curFood &&
//   dogs.foodPortion * 0.9 < dogs.curFood;

// console.log(dogs.some(checkEatingOk));
// // 7. Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)
// const ownerEatingOk = dogs
//   .filter(checkEatingOk)
//   .map((dogs) => dogs.owners)
//   .flat();
// console.log(ownerEatingOk);

// // 8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects 😉) The Complete JavaScript Course

// // dogs.map((dogs) => dogs.foodPortion.sort((a, b) => a - b));

// // 26

// // Hints:

// // §

// // §

// // Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉 Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

// // Test data:

// // const dogs = [

// // { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },

// // { weight: 8, curFood: 200, owners: ['Matilda'] },

// // { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },

// // { weight: 32, curFood: 340, owners: ['Michael'] },

// // ];

// // GOOD LUCK 😀

function filter_list(l) {
  // Return a new array with the strings filtered out

  const array = l.filter((i) => typeof i === "number");
  return array;
}

console.log(filter_list([1, 2, "a", "b"]));
