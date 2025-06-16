// if - розгалушення

// if (умова) {
//     гілка true;
// } else {
//     гілка false;
// }

// const isLogged = true;

// if (isLogged) {
//     console.log('Hello');
//     console.log('Вітаємо, ви успішно увійшли в систему');
// } else {
//     console.log('Спробуйте ввести свої дані повторно');
// }

// Task: Заданна змінна
// const isEnoughMoney = true;
// Якщо грошей достатньо, вивести "Операцію схвалено"
// Якщо грошей недостатньо, вивести "Операцію відхилено("

// const isEnoughMoney = Number(prompt('Яка к-ть грошей'));
// const isEnoughMoney = true;

// if (isEnoughMoney) {
//     console.log("Операцію схвалено");
// } else {
//     console.log("Операцію відхилено(")
// }

// Оператори порівняння
// age > 18/  >, <, >=, <=, ==/===, !=, !==

// const age = 18;

// console.log('age > 18 :>> ', age > 18);
// console.log('age < 18 :>> ', age < 18);
// console.log('age >= 18 :>> ', age >= 18);
// console.log('age <= 18 :>> ', age <= 18);

//! Нестрога рівність / нерівність - ПОГАНО!
// console.log('age == 18 :>> ', age == 18);
// console.log('age == "18" :>> ', age == '18');
// console.log('age != 18 :>> ', age != 18);
// console.log('age != "18" :>> ', age != '18');

// // Строга нерівність / рівність
// console.log('age === 18 :>> ', age === 18);
// console.log('age === "18" :>> ', age === '18');
// console.log('age !== 18 :>> ', age !== 18);
// console.log('age !== "18" :>> ', age !== '18'); // 18!=='18'

// Якщо користовач повнолітній, то привітати, якщо ні - то доступ заборонений

// const age = Number(prompt('Скільки Вам років?'))

// if (age>=18) {
//     console.log("Вітаємо на порталі послуг ")
// } else {
//     console.log("Вибачте, доступ заборонено")
// }

// Ввести 2 числа і знак операції.
// Якщо введено "+", то порахувати і вивести суму цих чисел,
// інакше вивести їхню різницю
// ==="+"

// const numberFirst = Number(prompt('Введіть перше число'));
// const firstSign = (prompt('Введіть знак операції'));
// const numberSecond = Number(prompt('Введіть друге число'));

// if (firstSign === "+") {
//     console.log(numberFirst + numberSecond)
// } else {
//     console.log(numberFirst - numberSecond)
// }

// Скорочена форма if

// if (умова) {
//   гілка true;
// }

// Вивести привітання для користувачів сайта
// Але якщо користувач неповнолітній, то попередити його про обмежений функціонал

// const age = Number(prompt('Скільки Вам років?'))

// if (age <18) {
//     console.log('Вибачте Вам надано обмежений функціонал')
// }
// console.log('Вітаємо на нашому ресурсі');

// Розширена форма if

// if (умова) {
//   гілка true;
// } else if (умова) {
//   гілка ;
// } else if (умова) {
//   гілка ;
// } else {
//   гілка false;
// }

// Ввести 2 числа і знак операції.
// Якщо введено "+", то порахувати і вивести суму цих чисел,
// Якщо введено "*", то порахувати і вивести добуток цих чисел,
// інакше вивести їхню різницю

// const numberFirst = Number(prompt("Введіть перше число"));
// const firstSign = prompt("Введіть знак операції");
// const numberSecond = Number(prompt("Введіть друге число"));

// if (firstSign === "+") {
//   console.log("Сума: ", numberFirst + numberSecond);
// } else if (firstSign === "*") {
//   console.log("Добуток: ", numberFirst * numberSecond);
// } else {
//   console.log(numberFirst - numberSecond);
// }

// Умовні (булевські) операції

// умова І умова   - умова && умова    - age >= 18 && isVactinated
// умова АБО умова - умова || умова    - age < 18  || isVactinated
// НЕ умова        - !умова

console.group('Таблиця істинності &&:');

console.log('true && true :>> ', true && true); // => true, якщо всі trueAdd commentMore actions
console.log('false && false :>> ', false && false);
console.log('true && false :>> ', true && false);
console.log('false && true :>> ', false && true);

console.groupEnd();

console.group('Таблиця істинності ||:');

console.log('true || true :>> ', true || true);
console.log('false || false :>> ', false || false); // => false, якщо всі false
console.log('true || false :>> ', true || false);
console.log('false || true :>> ', false || true);

console.groupEnd();

// falsy: 0, '', false, null, underfined, NaN
const q ='string'
// if(q!==''&&q!==undefined&&q!==null) {
if (q) {
    console.log('Значення коректне');
}

const day = 'friday';
const date = 13;
// видати повідомлення про знижку, якщо пт 13
if(day==='friday'&&date===13) {
    console.log('Вітаємо, вам надано знижку в 10%')
}

// якщо неповнолітній, то вивести інфо про обмеженняAdd commentMore actions
const isAdult = false;

// if (isAdult !== true)
// if (isAdult === false)
if (!isAdult) {
    console.log('Вибачте Вам надано обмежений функціонал')
}

// Number.isNaN(NaN)
// не можна перевіряти NaN===NaN




