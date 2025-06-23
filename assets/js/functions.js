// Функції

// Повторне використання коду
// Одна функція - одна відповідальність

// Оголошення функції
// function fName (param1, param2, ...) {
// тіло функції
// return значення
//}

// Виклик функції
// fName('p1', 'p2', ...)

// в дужках при оголошені - параметри функції
// function myFunction(userName) {
//     // console.log(`Hello, ${userName}`);
//     const userGreeting = `Hello, ${userName}`;
//     return userGreeting;
// }

// myFunction('Iryna'); // в дужках при виклику - аргументи

// myFunction('Vadim');

// const a = myFunction('Ivo');
// console.log('a :>> ', a);

// написати функцію для обчислення суми двох чисел

// function sum(par1, par2) {
//     const result1 = par1 + par2;
//     return result1;
// }

// const result = sum(4, 5);
// console.log('result :>> ', result);

// function sum(par1, par2) {
//    return par1 + par2;
// }

// const result = sum(4, 5);
// console.log('result :>> ', result);

// написати функцію, яка приймає два параметри a, b і повертає a**b
// 2,2 => 4
// 3,4 => 81

// function myPow(a, b) {
//   return a ** b;
// }

// const pow = myPow(2, 2);
// console.log(pow);

// написати функцію для обчислення суми цілих чисел від n1 до n2
// 1, 5 => 1 + 2 + 3 + 4 + 5
// 7, 10 => 7 + 8 + 9 + 10

// function sumFromAToB(from, to) {
//   let sum = 0;
//   for (let i = from; i <= to; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log('sumFromAToB(1,5) :>> ', sumFromAToB(1, 5));
// console.log('sumFromAToB(1,5) :>> ', sumFromAToB(100, 110));

// Task: Написати функцію яка примає вік користувача і повертає true для повнолітнього користувача,
// false - для неповнолітніх

// function age1(number) {
//   if (number >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const ourAge = age1(18);
// console.log(ourAge);

// function age2(number) {
//     return number >= 18 ? true: false;
// }

// const ourAge2 = age2(18);
// console.log(ourAge2);

function isAdult(age) {
    return age >= 18;
}

console.log('isAdult :>> ', isAdult(2));

