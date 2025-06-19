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

// let i = 1;
// let sum = 0; // акумулятор
// while (i <= 20) {
//   sum = sum + i;
//   i++;
// }
// console.log("sum :>> ", sum);

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

// let x = 1;
// let mult = 1;

// while (x <= 10) {
//   mult = mult * x;
//   ++x;
// }

// console.log(mult);

// ------------------------цикл for -----------------------------

// let currentPage = 1;
// const TOTAL_PAGE_AMOUND = 5;

// while (currentPage <= TOTAL_PAGE_AMOUND) {
//   console.log(currentPage);
//   currentPage++;
// }

// for(початкове-значення; умова-продовження; зміна-лічильника) {
// тіло циклу
// }

// const TOTAL_PAGE_AMOUND = 10;
// //              0                   1                             3
// for (let currentPage = 1; currentPage <= TOTAL_PAGE_AMOUND; currentPage++) {
//   console.log('currentPage :>> ', currentPage); // 2
// }

// 0 (ініціалізація лічильника) виконується 1 раз до циклу
// 1 (умова продовження циклу)  якщо умона істинна, то виконуємо тіло циклу 2, інакше вихід
// 2 (тіло циклу)               виконується, якщо умова 1 істинна
// 3 (зміна лічильника)         виконується після кожної ітерації. Потім перехід на 1

// for (let i = 1; i <= 20; i++) {
//   console.log('i :>> ', i);
// }

// вивести парні числа від 10 до 20 (+2)
// for (let i = 10; i <= 20; i = i + 2) {
//   console.log('i :>> ', i);
// }

// вивести 10, 20 , 30 ..., 100

// for (let i = 10; i <= 100; i = i + 10) {
//   console.log('i :>> ', i);
// }

// вивести всі числа від 5 до -5 з інтервалом 0.5
// 5 4.5 4 3.5 ... -4 -4.5 -5
// for (let i = 5; i >= -5; i = i - 0.5) {
//   console.log('i :>> ', i);
// }

// знайти суму середнє арифметичне непарних чисел від 3  до 11 (3 + 5 + 7 + 9 + 11)/5

// let sum = 0;
// debugger;
// for (i = 3; i <= 11; i += 2) {
//   // локальна (блочна) область видимості
//   sum += i; // sum = sum + i
// }

// console.log("avg =", sum / 5);
// Області видимоті:
// Global
// Script
// Block
// Global >> Script >> Block

// Порахувати добуток чисел від -5 до 10 

let mult = 0;
for (let x = -5; x <= 10; x++) {
  mult = mult * x;
}
console.log(mult);

//--------------------------------------------
// передумова; min 0
// while (condition) {
//   body
// }

// передумова; min 0
// for(initialization; condition; var_change){
//   body
// }

// постумова; min 1
// do {
//   body
// } while (condition)
//---------------------------------------------
// break; - завершити цикл
// continue; - завершити поточну ітерацію і перейти одразу до наступної
