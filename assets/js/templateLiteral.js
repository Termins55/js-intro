// const summand1 = 4;
// const summand2 = 5;

// console.log(
//   String(summand1) + "+" + String(summand2) + "=" + String(summand1 + summand2)
// );

// // Шаблонний літера
// console.log(`Summand1: ${summand1}`);

// console.log(`${summand1} + ${summand2} = ${summand1 + summand2}`);

// // Task
// const greeting = 'Hello';
// const userName = prompt('Enter your name');
// console.log(`${greeting}, ${userName}`) // 'Hello, name' by tamplate literal

// ---------------------------------------------------------
// Користувач має 3 спроби ввести пароль
// Якщо пароль вірний, то вивести "Пароль вірний"
// Інакше "Пароль невірний"

const TRY_LIMIT = 3;
const PASSWORD_PATTERN = "qwerty";

let currentTry = 1;
let password = "";

// do {
//     password = prompt('Input password')
//     if (password === PASSWORD_PATTERN) {
//         break;
//     }
//     currentTry++;
// } while (currentTry <= TRY_LIMIT);

// if (currentTry === TRY_LIMIT) {
//     console.log('Password is correct');
// } else {
//     console.log('Password is incorrect');
// }

let isPasswordCorrect = false;
do {
  isPasswordCorrect = prompt("Input password") === PASSWORD_PATTERN;
} while (++currentTry <= TRY_LIMIT && !isPasswordCorrect);

// if (currentTry === TRY_LIMIT) {
//     console.log('Password is correct');
// } else {
//     console.log('Password is incorrect');
// }
console.log(`Password is ${isPasswordCorrect ? "correct" : "incorrect"}`);

//-------------------------------------
// якщо людина повнолітня вивести "Ви повтолітній" інакше "Ви не повтолітній"
// const age = 25;

// const resultString = age >= 18 ? 'Ви повтолітній': 'Ви не повтолітній';
// console.log(resultString)
