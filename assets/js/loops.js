// console.log('Пройти прямо');
// console.log('Повернути наліво');
// console.log('Пройти прямо');
// console.log('Повернути наліво');
// console.log('Пройти прямо');
// console.log('Повернути наліво');
// console.log('Пройти прямо');
// console.log('Повернути наліво');

// повтори 4 рази:
// console.log('Пройти прямо');
// console.log('Повернути наліво');

// while (умова) { цикл з передумовою
//  тіло циклу
//}

// let sideCount = 1;
// const TOTAL_SIDE_AMOUND = 4;

// while (sideCount <= TOTAL_SIDE_AMOUND) {
//     console.log('Пройти прямо');
//     console.log('Повернути наліво');
//     sideCount++; // sideCount +=1; //sideCount = sideCount + 1;
// }

// sideCount - змінна циклу
// змінна цикла має змінюватись, щоб досягти умови закінчення
// 1 виконання тіла циклу -- ітерація

// Task: У користувача є книга з pageCount сторінок
// 1) Вивести номери сторінок з 1ї по останню

// let currentPage = 1;
// const TOTAL_PAGE_AMOUND = 5;

// while (currentPage <= TOTAL_PAGE_AMOUND) {
//   console.log(currentPage);
//   currentPage++;
// }

// Вивести тільки парні номери сторінок

// let currentPage = 1;
// const TOTAL_PAGE_AMOUND = 5;

// while (currentPage <= TOTAL_PAGE_AMOUND) {
//   if (currentPage % 2 === 0) {
//     console.log(currentPage);
//   }
//   currentPage++;
// }

// Ввести число і вивести його квадрат
// Перевірити, щоб число було скінченним (не NaN, Infinity)

// 1 вести число
// 2 якщо воно підходе то тоді вивести його квадрат
// 3 якщо не підхоже то перейти на 1 пункт

// let n = Number(prompt('Input value'));

// while (!Number.isFinite(n)) {
//   n = Number(prompt('Input value'));
// }
// console.log(n * n);

// do..while
// do {
//  тіло циклу
// } while (умова) цикл з постумовою

// let n = null;
// do {
//   n = Number(prompt('Input value'));
// } while (!Number.isFinite(n));

// console.log(n * n);

// 1) Вивести номери сторінок з 1ї до останньої через do..while

// let currentPage = 0;
// const TOTAL_PAGE_AMOUND = 10;

// do {
//   currentPage++;
//   console.log(currentPage);
// } while (currentPage<TOTAL_PAGE_AMOUND);

// порахувати суму чисел від 1 до 20

// 1 2 3 4 5 6 7 8 9 ...

let i = 1;
let sum = 0; // акумулятор
while (i <= 20) {
  sum = sum + i;
  i++;
}
console.log("sum :>> ", sum);

// 96 i=1;
// 98 i<=20 => true;
// 99       sum = 0 + 1 = 1
// 100      i = i + 1 = 1 + 1 = 2
// 98  2<=20 => true;
// 99       sum = 1 + 2 = 3
// 100      i = i + 1 = 2 + 1 = 3
// ....
// 98 20<=20 => true;
// 99       sum = 190 + 20 = 210
// 100      i = i + 1 = 20 + 1 = 21
// 98 21<=20 => false
// 102 ...

// порахувати добуток чисел від 1 до 10
// let mult = 1;

let x = 1;
let mult = 1;

while (x <= 10) {
  mult = mult * x;
  ++x;
}
console.log(mult);
