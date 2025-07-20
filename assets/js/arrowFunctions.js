// console.log(1, 2, 35, 5, 5);
// console.log(1);

// arguments - колекція для збереження аргументів функції
// function f(a, b) {
//   console.log(arguments);
//   console.log("a :>> ", a);
// }

// f(1, 2, 3);

// Написати функції для підрахунку суми необмеженої к-ті елементів

// function sum() {
//   console.log("arguments :>> ", arguments);
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// const sumOfArgs = sum(1, 2, 3, 4, 5, 6);
// console.log(sumOfArgs);

// Task: Написати функцію для розрахунку добутку необмеженої кількості  переданих аргументів

// function dob() {
//   let dob = 1;
//   console.log("arguments :>> ", arguments);
//   for (let i = 1; i < arguments.length; i++) {
//     dob *= arguments[i];
//   }
//   return dob;
// }

// const dobOfArgs = dob(1, 2, 3, 4, 5, 6);
// console.log(dobOfArgs);

// Task: *Написати функцію виду
// calculate(operation, operand1, operand2, …, operandN),Add commentMore actions
// де operation - це операція (+,*), яка має бути виконана над операндами.
// operation - arguments[0], тому цикл перебираємо з 1

// function calculate() {
//   let accum;
//   if (arguments[0] === "+") {
//     accum = 0;
//     for (let i = 1; i < arguments.length; i++) {
//       accum += arguments[i];
//     }
//   } else if (arguments[0] === "*") {
//     accum = 1;
//     console.log("arguments :>> ", arguments);
//     for (let i = 1; i < arguments.length; i++) {
//       accum *= arguments[i];
//     }
//   } else {
//     return undefined;
//   }
//   return accum;
// }
// const result = calculate("+", 1, 2, 3, 4);
// // const result = calculate("*", 1, 2, 3, 4);
// console.log(result)

// // operation = arguments[0]
// function calculate(operation) {
//   let accum;
//   if (operation === "+") {
//     accum = 0;
//     for (let i = 1; i < arguments.length; i++) {
//       accum += arguments[i];
//     }
//   } else if (operation === "*") {
//     accum = 1;
//     for (let i = 1; i < arguments.length; i++) {
//       accum *= arguments[i];
//     }
//   } else {
//     return undefined;
//   }
//   return accum;
// }
// const result = calculate("+", 1, 2, 3, 4);
// // const result = calculate("*", 1, 2, 3, 4);
// console.log(result)

// rest-parameters

// function f(a, b, ...args) {
//   console.log(args);
// }

// const res = f(1, 2, 3, 4, 5);

// Порахувати суму елементів

// function sum(...summands) {
//   // for, for..of,
//   function howToReduce(accum, item) {
//     return accum + item;
//   }
//   const sum = summands.reduce(howToReduce);
//   return sum;
// }

// const res1 = sum(1, 2, 3, 4, 5, 6);
// console.log(res1);

// Переробити в rest-parameters

// Task: *Написати функцію виду
// calculate(operation, operand1, operand2, …, operandN),Add commentMore actions
// де operation - це операція (+,*), яка має бути виконана над операндами.
// operation - arguments[0], тому цикл перебираємо з 1

// // operation = arguments[0]
// function calculate(operation) {
//   let accum;
//   if (operation === "+") {
//     accum = 0;
//     for (let i = 1; i < arguments.length; i++) {
//       accum += arguments[i];
//     }
//   } else if (operation === "*") {
//     accum = 1;
//     for (let i = 1; i < arguments.length; i++) {
//       accum *= arguments[i];
//     }
//   } else {
//     return undefined;
//   }
//   return accum;
// }
// const result = calculate("+", 1, 2, 3, 4);
// // const result = calculate("*", 1, 2, 3, 4);
// console.log(result)

// function calculate(operation, ...operand1) {
//   let accum;
//   if (operation === "+") {
//     accum = 0;
//     for (let i = 0; i < operand1.length; i++) {
//       accum += operand1[i];
//     }
//   } else if (operation === "*") {
//     accum = 1;
//     for (let i = 0; i < operand1.length; i++) {
//       accum *= operand1[i];
//     }
//   } else {
//     return undefined;
//   }
//   return accum;
// }
// arguments              0   1  2  3  4
// const result = calculate("*", 1, 2, 3, 4);
// ...operands                0  1  2  3
// console.log(result)

//           Порівняння arguments і rest-parameters
//           | властивість функції | треба оголошувати |    тип    | всі параметри?
// arguments |          +          |        -          | Arguments |      +
// rest      |          -          |        +          |   Array   |      -

// Arrow (стрілочна, стрелочная) function ----------------------------------

// function declaration
// function funcName (p1, p2) {}

// function expression
// const fName = function (p1, p2) {}

// arrow function
// const fName = (p1, p2) => {}

// const sum = (a, b) => {
//   return a + b;
// };

// Скорочена форма

// const sum = (a, b) => a + b;

// console.log(sum(4, 5));

// Написати функцію чи повтонолітня людина

// const isAdult = age => {
//   return age >= 18;
// };

// скорочена форма

// const isAdult = (old) => old >= 18;

// console.log(isAdult(18));

// Task: Запакувати у функції об'єкт
// firstName, lastName =>{
//   firstName: firstName,
//   lastName:lastName
// }

// const packToObject = (firstName, lastName) => ({
//   firstName: firstName,
//   lastName: lastName,
// });

// console.log(packToObject('Test', 'Testovych'));

// Спрощення при запису стрілочної функції -------------

// 1 Якщо параметр 1, то можна не брати його у дужки
// const isAdult = age => {
//   return age >= 18;
// };

// 2 Якщо в тілі функції тільки повернення значення,
//        то дужки і return можна опустити
// const isAdult = age => age >= 18;

// 3 Якщо в скороченому записі вигляду 2 повертається об'єкт,
//        то його портібно взяти в ()

// const packObject = (firstName, lastName) => ({
//   firstName: firstName,
//   lastName: lastName,
// });

// ---------------------------------------------------------------

// Обмеження:
// 1 Нема arguments
// 2 Нема свого this. Бере з середовища, тому не використовується як метод об'єкта

// ---------------------------------------------------------
// Task: Функція greeting(lang, userName), яка має повертати
// 'Hello ' + userName, if lang==='en'
// 'Вiтаю ' + userName, if lang==='ua'

// greeting ( 'ua', 'Ivo') => 'Вiтаю Ivo'
// greeting ( 'en', 'Ivo') => 'Hello Ivo'

// const greeting = (lang, userName) =>
//   lang === "ua" ? "Вітаю " + userName : "Hello " + userName;
// console.log(greeting('en', 'Ivo'))

const greetingOptions = {
  en: "Hello",
  ua: "Вiтаю",
  fr: "Bonjure",
};

// const lang = "ua";

const greeting = (lang, userName) => `${greetingOptions[lang]} ${userName}`;

console.log(greeting("en", "Ivo"));
console.log(greeting("ua", "Ігор"));
console.log(greeting("fr", "Fransua"));
