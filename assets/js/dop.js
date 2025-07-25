// Создай функцию sum(a, b), которая возвращает сумму a и b.

// const sum = function (a, b) {
//   return a + b;
// };
// console.log(sum(2, 2));

// Напиши функцию isEven(num), которая возвращает true, если число чётное, и false — если нет.

// const isEven = function (num) {
//   return num % 2 === 0;
// };
// console.log(isEven(2));

// 4. Повтор строки
// Создай функцию repeat(text, n), которая повторяет строку text n раз.

// const repeat = function (text, n) {
//   let textRep = '';
//   for (let i = 0; i < n; i++) {
//     textRep += text;
//   }
//   return textRep;
// };
// console.log(repeat("Настю не отпускают с работи", 3));

// 5. Минимум из двух чисел
// Напиши функцию min(a, b), которая возвращает меньшее из двух чисел.

// const minValue = function (a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// };
// console.log(minValue(1, 1));

// 6. Длина строки (без length)
// Создай функцию strLen(s), которая возвращает длину строки без использования s.length.

// 1. Возведение в квадрат
// Напиши функцию square(n), которая возвращает число n в квадрате.

// const square = function (n) {
//   return n * n;
// };

// console.log(square(5));

// 2. Конкатенация строк
// Напиши функцию concatStrings(a, b), которая соединяет две строки в одну.

// const concatStrings = function (a, b) {
//   return `${a} ${b}`;
// };
// console.log(concatStrings("String", "String"));

// 3. Проверка на ноль
// Напиши функцию isZero(n), которая возвращает true, если число равно нулю.

// const isZero = function (n) {
//   return n === 0;
// };
// console.log(isZero(0))

// 4. Удвоение строки
// Напиши функцию doubleString(s), которая возвращает строку s, повторённую дважды.

// const doubleString = function (s) {
//   return `${s} ${s}`;
// };

// console.log(doubleString("Lox"));

// 5. Сумма трёх чисел
// Напиши функцию sumThree(a, b, c), которая возвращает сумму трёх чисел.

// const sumThree = function (a, b, c) {
//   return a + b + c;
// };
// console.log(sumThree(2, 2, 2));

// 6. Обратная строка
// Напиши функцию reverseString(s), которая возвращает строку в обратном порядке без использования s.split("").reverse().join("").

// const reverseString = function (s) {
//   let reverse = "";
//   for (let i = s.length - 1; i >= 0; i--) {
//     reverse += s[i];
//   }
//   return reverse;
// };

// console.log(reverseString("String"));

// 7. Проверка на чётность (через тернарный оператор)
// Напиши функцию isEvenTernary(n), которая возвращает true, если число чётное, используя тернарный оператор.

// const isEvenTernary = function (n) {
//   return `${n % 2 === 0}`;
// };
// console.log(isEvenTernary(3));

// 8. Поиск минимального числа в массиве
// Напиши функцию findMin(arr), которая возвращает наименьшее число в массиве без использования Math.min.

// const findMin = function (arr) {
//   if (arr.length === 0) return null;
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// };
// console.log(findMin([5, -1, 10]));

// 9. Заглавная буква
// Напиши функцию capitalize(s), которая делает первую букву строки заглавной.

// const capitalize = function (s) {
//   let firstLetter = s[0].toUpperCase();
//   const restOfString = s.slice(1);
//   return firstLetter + restOfString;
// };
// console.log(capitalize("Nastya"));

// 10. Умножение элементов массива
// Напиши функцию multiplyArray(arr), которая возвращает произведение всех чисел в массиве.

// const multiplyArray = function(arr) {
//     let
// }
// console.log(multiplyArray([2, 3, 4]))

// Task: Створити об'єкт машини (марка, модель, рік випуску, номер, колір)
// Переглянути об'єкт
// змінити колір
// видалити властивість рік випуску
// додати властивість ім'я/прізвище власника
// Переглянути об'єкт

// const myCar = {
//     mark: 'Mitsubishi',
//     module: 'Lancer',
//     year: '2008',
//     nomer: 'BA0415BH',
//     color: 'gray',
// }

// console.log(myCar)

// myCar.color = 'red'
// console.log(myCar)

// delete myCar.year;
// console.log(myCar)

// myCar.firstName = 'Ihor'
// myCar.lastName = 'Filipiev'
// console.log(myCar)

// Задача 2. Объект "Банковский счет" (BankAccount)
// Создать объект bankAccount, который содержит:

// Свойства:
// номер счета

// имя владельца

// текущий баланс

// история транзакций (объект, где ключ — уникальный ID транзакции, а значение — объект с типом транзакции, суммой и датой)

// Методы:
// пополнить счет (принимает сумму)

// снять деньги (принимает сумму, проверяет достаточность средств)

// показать историю транзакций

// конвертировать баланс в другую валюту (принимает курс конвертации)

// Дополнительно:
// Добавить свойство accountType (тип счета: "debit" / "credit").

// Удалить свойство "валюта счета".

// Сделать 2 копии объекта разными способами.

// Добавить метод для расчета процентов за месяц.
// const bankAccount = {
//   numberScore: "1234545465631",
//   name: "Andriy",
//   currentBalance: 1000,
//   historyTransaction: {
//     2222: {
//       transaction: "asdsadsa",
//       sum: "100",
//       date: "2025-03-10",
//     },
//     3333: {
//       transaction: "asdsadsa",
//       sum: "200",
//       date: "2025-05-05",
//     },
//   },
//   plusBalance(plus) {
//     this.currentBalance = this.currentBalance + plus;
//   },
//   minusBalance(minus) {
//     if (this.currentBalance >= minus) {
//       this.currentBalance = this.currentBalance - minus;
//     } else {
//       console.log("Не достаточно деняк");
//     }
//   },
//   convertValue() {
//     const usd = 42;
//     this.currentBalance = this.currentBalance / usd;
//   },
// };

// console.log(bankAccount);

// bankAccount.plusBalance(200);
// console.log(bankAccount);

// bankAccount.minusBalance(1300);
// console.log(bankAccount.currentBalance);

// console.log(bankAccount.historyTransaction);

// // bankAccount.convertValue(42);
// // bankAccount.convertValue();
// console.log(bankAccount.convertValue());
// console.log(bankAccount.currentBalance)

// 0 Створити числовий масив та проініціалізувати його.
// 1 Видалити останній і початковий елемент з масиву, додати елемент до початку і кінця.
// 2 Вивести розмір масиву.
// 3 Зробити копію масиву.

// // Не використовувати методи перебору масивів (forEach, filter, map, findIndex), а використати цикли

// 4 Вивести елементи з парними індексами.
// 5 Знайти добуток елементів масиву.

// // Методи перебору масивів (forEach, filter, map, findIndex, *some, *every).
// 8 Отримати новий масив із заданого, який міститиме лише ненульові числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10). // filter
// 9 Отримати новий масив їх заданого, який міститиме всі елементи вихідного, поділені на 100 (99, 5, 0, 9, 30 => 0.99, 0.05, 0, 0.09, 0.3). // map
// 10 Вивести елементи масиву, зведені у куб. // forEach
// 11 Визначити індекс елемента, квадрат якого дорівнює 100, і видалити його, або видати діагностичне повідомлення, якщо такого елементу не існує. // findIndex

// const randomNumbers = [1, 5, 10, 20, 30];

// console.log("randomNumbers :>> ", randomNumbers);

// randomNumbers.pop();
// console.log("randomNumbers :>> ", randomNumbers);

// randomNumbers.shift();
// console.log("randomNumbers :>> ", randomNumbers);

// randomNumbers.push(100);
// console.log("randomNumbers :>> ", randomNumbers);

// randomNumbers.unshift(50)
// console.log("randomNumbers :>> ", randomNumbers);

// console.log('randomNumbers.length :>> ', randomNumbers.length);

// const randomNumbersFirstCopy = Array.from(randomNumbers);
// console.log(randomNumbersFirstCopy === randomNumbers);

// const randomNumbersSecondCopy = [...randomNumbers];
// console.log(randomNumbersSecondCopy === randomNumbers);

// const randomNumbersThirdCopy = randomNumbers.slice();
// console.log(randomNumbersThirdCopy === randomNumbers);

// for (let i = 0; i <= randomNumbers.length; i++) {
//   if (randomNumbers[i] % 2 === 0) {
//     console.log(randomNumbers[i]);
//   }
// }

// let myProduct = 1;
// for (let i = 0; i < randomNumbers.length; i++) {
//   myProduct = myProduct * randomNumbers[i];
// }
// console.log(myProduct);

// 8 Отримати новий масив із заданого, який міститиме лише ненульові числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10). // filter

// const randomNumbers = [-1, 5, 0, 9, -10];

// function withoutNull(item) {
//   return item > 0 || item < 0;
// }

// const randomNumbersWithoutNull = randomNumbers.filter(withoutNull);
// console.log(randomNumbersWithoutNull)

// 9 Отримати новий масив їх заданого, який міститиме всі елементи вихідного, поділені на 100 (99, 5, 0, 9, 30 => 0.99, 0.05, 0, 0.09, 0.3). // map

// const randomNumbers = [99, 5, 0, 9, 30];

// function divideHundred (item) {
//     return item / 100
// }
// const randomNumbersHundred = randomNumbers.map(divideHundred)
// console.log(randomNumbersHundred)

// 10 Вивести елементи масиву, зведені у куб. // forEach

// const randomNumbers = [1, 2, 3, 4, 5];

// function toCube(item) {
//   console.log((item = item * item * item));
// }
// randomNumbers.forEach(toCube);

// 11 Визначити індекс елемента, квадрат якого дорівнює 100, і видалити його, або видати діагностичне повідомлення, якщо такого елементу не існує. // findIndex

// const randomNumbers = [1, 100, 3, 4, 5];

// function isOneHundred(item) {
//   return item === 100;
// }

// const foundIndex = randomNumbers.findIndex(isOneHundred);

// if (foundIndex !== -1) {
//   randomNumbers.splice(foundIndex, 1);
//   console.log(randomNumbers);
// } else {
//   console.log("такого елементу не існує");
// }

// Завдання 1
// Робота з числовим масивом (цикли + методи)

// Створити масив з 8 випадкових чисел (від -5 до 10) та вивести його.

// Видалити перші 2 елементи з масиву, потім додати число 100 у кінець.

// Вивести розмір масиву після змін.

// Зробити копію масиву (без посилань на оригінал).

// Обов’язкові умови:

// Не використовувати методи перебору (forEach, map тощо), тільки цикли (for, while).

// Додаткові підзавдання:
// 5. Вивести елементи з непарними індексами (наприклад, індекси 1, 3, 5...).
// 6. Знайти суму всіх від’ємних чисел у масиві.

// Приклад виконання:

// Вихідний масив: [2, -1, 0, 7, -3, 4, -2, 5]
// Після видалення та додавання: [0, 7, -3, 4, -2, 5, 100]
// Розмір: 7
// Копія: [0, 7, -3, 4, -2, 5, 100]
// Елементи з непарними індексами: 7, 4, 5
// Сума від’ємних: -6

// const randomNumbers = [2, -1, 0, 7, -3, 4, -2, 5];

// randomNumbers.shift();
// randomNumbers.shift();
// console.log(randomNumbers);

// console.log(randomNumbers.length)

// const randomNumbers2 = [...randomNumbers]
// const randomNumbers3 = Array.from(randomNumbers)
// const randomNumbers4 = randomNumbers.slice()

// const randomNumbers = [0, 7, -3, 4, -2, 5, 100]; perepisat

// for (let i = 0; i < randomNumbers.length; i++) {
//   if (randomNumbers[i] % 2 === 1) {
//     console.log(randomNumbers[i]);
//   }
// }

// const randomNumbers = [2, -1, 0, 7, -3, 4, -2, 5];

// let sum = 0;
// for (let i = 0; i < randomNumbers.length; i++) {
//   if (randomNumbers[i] < 0) {
//     sum += randomNumbers[i];
//   }
// }
//   console.log(sum);

// Завдання 2
// Робота з масивом рядків (методи перебору)

// Створити масив із 6 рядків (наприклад, імена: ["Anna", "Ivan", "Olya", "Petro", "Max", "Sofia"]).

// Вивести рядки, довжина яких більша за 4 символи.

// Отримати новий масив, де кожен рядок записаний у зворотному порядку (наприклад, "Anna" → "annA").

// Знайти індекс першого рядка, який містить літеру "a" (регістр не враховувати).

// Перевірити, чи всі імена починаються з великої літери (повернути true/false).

// Обов’язкові умови:

// Використовувати методи перебору (forEach, filter, map, findIndex, every).

// Приклад виконання:

// javascript
// Вихідний масив: ["Anna", "Ivan", "Olya", "Petro", "Max", "Sofia"]
// Рядки з довжиною > 4: ["Petro", "Sofia"]
// Зворотній порядок: ["annA", "navI", "aylO", "orteP", "xaM", "aifoS"]
// Індекс з літерою "a": 0 (бо "Anna" містить "a")
// Чи всі з великої літери? true

// const randomNames = ["Anna", "Ivan", "Olya", "Petro", "Max", "Sofia"];

// function onlyFour(item) {
//   return item.length > 4;
// }

// const randomNamesOnlyFour = randomNames.filter(onlyFour);
// console.log(randomNamesOnlyFour);

// function reverseStr(item) {
//   return item.split("").reverse().join("");
// }

// const randomNamesReverseStr = randomNames.map(reverseStr);
// console.log(randomNamesReverseStr);

// function lowerA(item) {
//   return item.toLowerCase().includes('a');
// }

// const randomNameslowerA = randomNames.findIndex(lowerA);
// console.log(randomNameslowerA);

// function upperLitera(item) {
//   return item[0] === item[0].toUpperCase();
// }

// const randomNamesUpperLitera = randomNames.every(upperLitera);
// console.log(randomNamesUpperLitera);

// ✅ Без методів перебору (використовуємо лише цикли)
// 🔸 1. Порахувати кількість парних чисел у масиві
// Створи числовий масив. Порахуй, скільки в ньому парних чисел. Виведи цю кількість.

// 🔸 2. Знайти максимальне число в масиві
// Пройтись циклом по масиву й знайти найбільше число.

// 🔸 3. Обнулити всі від’ємні значення в масиві
// Заміни всі від’ємні значення на 0, використовуючи цикл for.

// 🔸 4. Вивести всі елементи, які більші за середнє арифметичне масиву
// Спочатку знайди середнє значення, потім — виведи всі числа, що більші за нього.

// 🔸 5. Об’єднати два масиви без .concat()
// Маєш два масиви. Об’єднай їх у третій за допомогою циклів.

// ✅ З методами перебору масивів
// 🔸 6. Отримати масив з квадратів чисел
// Використай map, щоб кожне число піднести до квадрату.

// 🔸 7. Залишити тільки ті числа, що діляться на 3
// Використай filter, щоб залишити лише числа, що діляться на 3.

// 🔸 8. Дізнатися, чи є в масиві хоча б одне число більше 100
// Використай some, щоб перевірити цю умову.

// 🔸 9. Перевірити, чи всі числа додатні
// Використай every, щоб перевірити, чи всі числа більше 0.

// 🔸 10. Знайти перший елемент, що є парним і більшим за 20
// Використай find, щоб знайти таке число.

const randomNumbers = [2, -1, 0, 7, -3, 4, -2, 5];

// for (let i = 0; i < randomNumbers.length; i++) {
//   if (randomNumbers[i] % 2 === 0) {
//     console.log(randomNumbers[i]);
//   }
// }

// let sum = 0;
// for (let i = 1; i < randomNumbers.length; i++) {
//   if (randomNumbers[i] > sum) {
//     sum += randomNumbers[i];
//   }
// }
// console.log(sum);
// let accum = 0;
// for (let i = 0; i < randomNumbers.length; i++) {
//   if (randomNumbers[i] < 0) {
//     randomNumbers[i] = accum;
//   }
// }
// console.log(accum);
// console.log(randomNumbers);
