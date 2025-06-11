// JS - мова з динамічною типізацією, високорівнева, інтерпретована, мультипарадигмова, скриптова

// js виконується браузером (движком)

// Стандарт ECMAScript

// Вивести в мадальне вікно
// alert('Hello, world!');

// Виведення в консоль

// console.log('Hi)))')

// однорядковий коментар

/* 
    багаторядковий коментар

*/

// Змінні

// lowerCamelCase - для змінних/ функцій/ ....
// UpperCamelCase - класи
// UPPER_SNAKE_CASE - константи (PI)

// 1    a-z, A-Z, _, $
// 2... a-z, A-Z, _, $, 0-9

// let userName = 'Test'; // ініціалізація
// console.log(userName)
// userName = 1;           // let дозволяє змінювати значення
// console.log(userName);

// const constValue = 10;
// // constValue = 5;         // const НЕ дозволяє змінювати значення
// console.log(userName);

// // для уникнення випадкової зміни значення змінної, всі змінні, які не мають змінюватись
// // рекомендується оголошувати як const

// // НЕБЕЗПЕЧНО !!!
// var anotherValue = 'string'; // старий стиль

// // типи даних

// // string: 'value', "value", `value`
// const stringVar1 = 'string';
// const stringVar2 = "string";
// const stringVar3 = `string
//                     end of string`;
// console.log(stringVar1);
// console.log('store "AlieExpress"');
// console.log("store 'AlieExpress'");   // ('store \'AlieExpress\'')
// console.log('\u{1f607}');

// // числа
// // number: 4, 0, -10 - цілі числа
// // 20.5, -0.5 - з фіксованою крапкою
// // 0.00000000000000000000000004 = 0.4*10^-25 = 0.4e-25 - експоненціальна форма
// // 210000000000000000 = 21*10^16 =  21e16               (з плавачою комою)
// // NaN (not a number)
// // Infinity, -Infinity, +0, -0

// const a = 10.002;
// console.log(a);

// // Number.MAX_SAFE_INTEGER
// // Number.MAX_SAFE_VALUE

// // bigint
// const bigintValue = 1111111111111111111111111111n;
// console.log(bigintValue);

// // boolean: true (+), false (-)
// const isOdd = false;
// console.log(isOdd);

// // null: null - "порожня коробка з повітрям"
// const nullValue = null;
// console.log(nullValue);

// //underfined: underfined - "порожня коробка"
// let value;
// console.log(value);

// // Symbol()
// const symbolValue = Symbol('foo'); // 'dqf238r2383uje1209e93i13m'
// console.log(symbolValue);

// // примітивних типів 7 + object 1 = 8

// // object
// const objValue = {};
// console.log(objValue);

// ///////////////////////////////////////////////////////////////////////////////////////////

// // Визначення типу даних
// // typeof значення
// console.log('typeof 10:', typeof 10);
// console.log('typeof objValue:', typeof objValue)
// console.log('typeof underfined:', typeof undefined);
// // визначити типа 11n, '11n', true, 'true', null
// console.log('typeof 11n:', typeof 11n); // bigint
// console.log("typeof '11n':", typeof '11n'); // string
// console.log('typeof true:', typeof true); // boolean
// console.log('typeof "true":', typeof "true"); // string
// console.log('typeof null:', typeof null); // object

// // Задати 2 змінні: своє імʼя і кількість років і вивести ці значення в консоль
// const stringName1 = 'Ihor';
// let numberOld1 = 27;
// console.log(stringName1, numberOld1);

// // Операції
// let b = 10; // присвоєння - ініціалізація
// b = 0; // присвоєння

// // африметричні: + - * / % **
// let c = 1 + 2;
// console.log(c);

// console.log(2 - 1);

// let d = 5 - 8;
// console.log(d);

// let e = 7 * 0.58;
// console.log(e);

// let f = 8 / 9;
// console.log(f);

// let g = 10 % 3; // залишок від ділення 3 цілих і 1 в залишку
// console.log(g);

// let h = 10 ** 2; // піднесення до степеня
// console.log(h);

// console.log(Math.sqrt(3)); // корінь квадрат

// console.log(Math.pow(4, 2)); // піднесення до степеня

// // знайти довжину кола за радіусом: 2 * PI * к
// const r = 10;
// const l = 2 * Math.PI * r;
// console.log(l);

// console.log(2 ** (3 ** 2));

//-----------------------
// let p = 10;
// alert('Hi');
// console.log('first', 'Hello');
// Math.pow(1, 5);
//-----------------------

// Операції для рядків
// Конкатенація (склеювання)
// 'str1' + 'str2' ==> 'str1str2'

// const greeting = 'You are ';
// const age = prompt('How old are you?')
// console.log(greeting + age + ' years old');

// скорочені операції +=, *=, -=, /=, ....
// let sum = 5;
// sum += 5; // sum = sum + 5;
// console.log(sum);
// sum *=10; // sum = sum * 10;
// console.log(sum);

// // інкремент постфіксний
// sum++; // sum += 1; // sum= sum +1;
// console.log(sum);
// let x = 10;
// const y = x++;
// console.log('y=', y);
// console.log(x);

// // інкремент префіксний
// let x1 = 10;
// const y1 = ++x1;
// console.log('y1=', y1);
// console.log(x1);

// декремент: --x, x--

//---------------------------------------
// Вивести 2 числа і вивести їх суму
// const a1 = prompt('Введіть перше число:');
// // const a2 = prompt('Введіть друге число:');
// const a2 = 100;
// const sum = a1 + a2;
// console.log(sum);

// приведення типів (явне)
// result = Number(sourse)
// const res1 = Number ('10');
// console.log(res1)

// const res2 = Number (null);
// console.log(res2)

// const res3 = String(200); // '200'
// console.log(res3);

// // Вивести 2 числа і вивести їх суму
// // const Op1 = +prompt('Введіть перше число:');
// const Op1 = Number(prompt('Введіть перше число:'));
// const Op2 = Number(prompt('Введіть друге число:'));
// const sum = Op1 + Op2;
// console.log(sum)

// Вивести 3 числа і порахувати їх добуток

// const Op1 = Number(prompt('Введіть перше число:'));
// const Op2 = Number(prompt('Введіть друге число:'));
// const Op3 = Number(prompt('Введіть третє число:'));

// const sum = Op1 * Op2 * Op3;
// console.log(sum)

// приведення типів (неявне) - варто уникати усюди, де можна

console.log("10 + '10' = ", 10 + '10')
console.log("null + '10' = ", null + '10')







