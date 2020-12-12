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

const displayMovements = function (movements) {
  // Delete initial container
  containerMovements.innerHTML = "";
  //Same as doing .textContent = 0

  // Loop through the array of movements of the user
  movements.forEach(function (mov, i) {
    const typeMovement = mov > 0 ? "deposit" : "withdrawal";

    const html = `
        <div class="movements_row">
          <div class="movements_type movements_type--${typeMovement}">${
      i + 1
    } ${typeMovement}</div>
          <div class="movements_value">${mov}</div>
        </div>
    `;

    // Adding the movements to the HTML
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account1.movements);

const user = "Steven Thomas Williams"; //stw

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

// Calculating account balance
// Setting a reduce function to accumulate the account balance
const calcPrintBalance = (movements) =>
  movements.reduce((acc, cur) => acc + cur, 0);

calcPrintBalance(account1.movements);

// Adding the account balance to the application
const updateBalance = (account) =>
  (labelBalance.textContent = `${calcPrintBalance(account)} EUR`);

updateBalance(account1.movements);

// Total Deposits
const calcDisplaySummary = (movements) =>
  movements.filter((mov) => mov > 0).reduce((acc, cur) => acc + cur, 0);
// Updating Total Deposits in the app
const totalInDisplay = (account) =>
  (labelSumIn.textContent = calcDisplaySummary(account.movements));
totalInDisplay(account1);

// Total Withdrawal
const calcDisplayWithdrawal = (movements) =>
  movements.filter((mov) => mov < 0).reduce((acc, cur) => acc + cur, 0);
// Updating info in the app
const totalOutDisplay = (account) =>
  (labelSumOut.textContent = Math.abs(
    calcDisplayWithdrawal(account.movements)
  )) + "€";
totalOutDisplay(account1);

// Total Interests
const interest = (movements) =>
  movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * 1.2) / 100)
    .filter((mov) => mov >= 1)
    .reduce((acc, cur) => acc + cur, 0);
// Updating the app
const interestDisplay = (account) =>
  (labelSumInterest.textContent = interest(account.movements)) + "€";
interestDisplay(account1);

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

console.log(movements.find((mov) => mov < 0));

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);
