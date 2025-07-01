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

