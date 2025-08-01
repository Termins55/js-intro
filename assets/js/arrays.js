// const usersList = {Add commentMore actions
//   1: { id: 1, name: 'Test' },
//   2: { id: 2, name: 'Ivo' },
// };

// Array - впорядкована колекція

const arr1 = new Array();
const arr2 = Array();
const arr3 = []; // синтаксичний цукор

// const users = [
//   { id: 1, name: "Test" },
//   { id: 2, name: "Ivo" },
// ];

// arr[i] - доступ до елемента під номером iAdd commentMore actions
// arr.length - довжина масива

// console.log("Масив users :>> ", users);

// console.log("users[0] :>> ", users[0]);

// console.log("Кількість елементів users :>> ", users.length);

// const fantasticElems = [1, "qwerty", { name: "User1" }];

// Задати масив, в якому перераховано 3 перших місяці року

// const months = ["June", "July", "August"];
// console.log(months);

// Перебір обʼєктів циклами

// for (let i = 0; i < months.length; i++) {
//   console.log(months[i]);
// }
// //-------------------------------------------
// document.write("<h1>Month List</h1>");

// document.write("<ul>");

// for (let i = 0; i < months.length; i++) {
//   document.write(`<li>${months[i]}</li>`);
// }
// document.write("</ul>");

// //
// document.write("<ul>");

// for (let i = 0; i < users.length; i++) {
//   document.write(`<li>${users[i].id} ${users[i].name}</li>`);
// }

// document.write("</ul>");

// Задати масив з довільних чисел (10, 20, -5, 0.5) і вивести і вивести тільки додатні з них

const numbers = [1, 33, 56, -90, 76];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    console.log(numbers[i]);
  }
}

document.write("<ul>");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    document.write(`<li>${numbers[i]}</li>`);
  }
}
document.write("</ul>");

// Реалізувати функцію для підрахунку суми елементів масиву

const numbers1 = [1, 5, 10, Math.random()];

console.log("numbers1 :>> ", numbers1);

const sumOfNumbers1 = calcSum(numbers1);
console.log("sumOfNumbers1 :>> ", sumOfNumbers1);

function calcSum(numbs) {
  let sum = 0;
  for (let i = 0; i < numbs.length; i++) {
    sum += numbs[i];
  }
  return sum;
}

// Перебір елементів спеціалазованими циклами // for..in - key, for..of - items

// for (const index in months) {
//   console.log(index, months[index]);
// }

// for (const item of months) {
//   console.log(item);
// }

// Перебрати масив користувачів for..of *Вивести тільки імена користувачів

// for (const user of users) {
//   console.log(user.name);
// }

// Копіювання масивів

const numbers2 = [1, 2, 3];

// const numbers3 = numbers2; // НЕ ПИШЕМО, копіюється посилання

const numbers2Copy1 = Array.from(numbers2);
const numbers2Copy2 = [...numbers2];

// Методи масивів -----------------------------------------------

// push pop shift unshift
// const numbers3 = [10, 20, 30];
// numbers3.push(40); // додає елемент у кінець масиву
// console.log("numbers3 :>> ", numbers3);

// Ввести кількість елементів масиву і динамічно заповнити масив

// const elmentCount = +prompt("Input count:");
// const elements = [];

// for (let i = 0; i < elmentCount; i++) {
//   const elem = +prompt("Input number");
//   elements.push(elem);
// }

// console.log('elements :>> ', elements);

// const removedElement = numbers3.pop(); // повертає і видадяє останній елемент
// console.log('removedElement :>> ', removedElement);

// numbers3.shift(); // повертає та видаляє перший елемент
// numbers3.unshift(50); // додає елемент на початок масива

// shift i unshift використовувати в крайніх випадках!

// Копіювання частини масиву

const numbers4 = [100, 200, 300, 400];

const numbersCopy = numbers4.slice();
const numbers4Part1 = numbers4.slice(2);
const numbers4Part2 = numbers4.slice(1, 3);

// Видалення елементів з масиву

numbers4.splice(2, 1);

const numbers5 = [100, 200, 300, 400];
// Видалити перший елемент
// Скопіювати останні 2 елементи

numbers5.splice(0, 1);
const numbers5Part1 = numbers5.slice(1); // const numbers5Part1 = numbers5.lenght - 2;
console.log("numbers5 :>> ", numbers5);
console.log("numbers5Part1 :>> ", numbers5Part1);

// Конкатинація масивів
const arr10 = [5, 6, 7];
const arr20 = [1, 2, 3];
// [5,6,7,1,2,3]
const arr30 = arr10.concat(arr20);
console.log("arr30 :>> ", arr30);

const arr40 = [...arr10, ...arr20];
console.log("arr40 :>> ", arr40);

// Методи перебору масивів ----------------------------------------

// Поняття колбеку
// Колбек - це функція, яка передається до іншої функції
//          і виконується в ній

// function funcWithCallback(cb, value) {
//   cb(value);
// }

// funcWithCallback(alert, 'Hello');
// funcWithCallback(console.log, 'Hello from console');

// forEach
const arr100 = [1, 2, 3];

function printItem(item, index, array) {
  console.log(`item[${index}] = ${item}`);
  console.log(array);
}

arr100.forEach(printItem);

// for (let i = 0; i < arr100.length; i++) {
//   printItem(arr100[i], arr100);
// }

//

// Згенерувати масив квадратів елементів [1, 2, 3] => [1, 4, 9]

function toSqr(item) {
  return item ** 2;
}

const arr100Mapped = arr100.map(toSqr);

// отримати елементи з вихідного, змінити знаки елементам

function chamgeSign(item) {
  return -item;
}

const arr100Mapped2 = arr100.map(chamgeSign);
console.log(arr100Mapped2);

// Отримати масив з іменами користувачів

const users = [
  { id: 1, name: "Test", age: 15 },
  { id: 1, name: "Test", age: 18 },
  { id: 2, name: "Ivo", age: 30 },
]; // ["Test", "Ivo"]

function getName(user) {
  return user.name;
}

const names = users.map(getName);
console.log(names);

// фільтрація
const arr200 = [1, 5, -10, 16, 0, 9];

function isOdd(item) {
  return item % 2 === 1;
}

const arrOdd = arr200.filter(isOdd);
console.log(arrOdd);

// отримати масив повнолітніх користувачів

function isAdult(user) {
  return user.age >= 18;
}

const adultUsers = users.filter(isAdult);
console.log(adultUsers);

// findIndex => індекс знайденого елемента (для якого з колбека повертається true,
//              або -1, якщо його не знайдено (для кожного повернулося false))
function isSixteen(item) {
  return item === 16;
}

const foundIndex = arr200.findIndex(isSixteen);
console.log(foundIndex);

arr200.splice(foundIndex, 1);

if (foundIndex !== -1) {
  arr200.splice(foundIndex, 1);
}


