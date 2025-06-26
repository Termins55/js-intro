// const firstName = "Test";
// const lastName = "Testovych";
// const age = 25;

// // Обʼєкти

// const obj1 = {}; // синтаксичний цукор
// const obj2 = Object();
// const obj3 = new Object();

// console.log(obj1);
// // // alert(obj1); // не підтримує виведення обʼєктів

// // // Ініціалізація

// // Властивості - рядки, symbol()
const user = {
  // key: value
  firstName: "Test",
  lastName: "Testovych",
  age: 25,
  password: "qwerty",
};

console.log("user :>> ", user);

// // Доступ до властивостей - операція .

// // Читання властивостей
// const userName = user.firstName;
// console.log('userName :>> ', userName);

// user.age = 26;
// console.log('user :>> ', user);

// // Додавання властивостей
// user.email = 'test@mail.com',
// console.log('user :>> ', user);

// // Видалення властивостей
// delete user.password;
// console.log('user :>> ', user);

// Task: Створити об'єкт машини (марка, модель, рік випуску, номер, колір)
// Переглянути об'єкт
// змінити колір
// видалити властивість рік випуску
// додати властивість ім'я/прізвище власника
// Переглянути об'єкт

// const car = {
//     mark: 'Mitsubishi',
//     module: 'Lancer',
//     data: 2008,
//     numberPlate: 'ВА0415HB',
//     color: 'lightgray',
// }
// console.log('car :>> ', car);

// car.color = 'black';
// delete car.data;

// console.log('car :>> ', car);

// car.firstName = 'Ihor';
// car.secondName = 'Filipiev';
// console.log('car :>> ', car);

// // Зробити копії для car

// const car2 = Object.assign({}, car);
// car2.color = 'White'
// console.log("car2 :>> ", car2);
// console.log(car2 === car);

// const car3 = {...car};
// car3.module = 'RX7'
// console.log('car3 :>> ', car3);
// console.log(car3 === car);

// Типи-значення (примітиви) і посилальні типи (обʼєкти)
// const numberValue1 = 5;
// const numberValue2 = 5;
// console.log(numberValue1 === numberValue2);

// const objValue1 = {};
// const objValue2 = {};
// console.log(objValue1 === objValue2);

// const user1 = user;

// user1.firstName = "AnotherName";
// console.log("user1 :>> ", user1);
// console.log("user :>> ", user);
// console.log(user === user1);

// // Копіювання обʼєктів
// const user2 = Object.assign({}, user);
// console.log("user2 :>> ", user2);
// console.log(user2 === user);

// const user3 = { ...user };
// console.log("user3 :>> ", user3);
// console.log(user3 === user);

// Методи обʼєкту

// const user = {
//   // key: value
//   firstName: "Test",
//   lastName: "Testovych",
//   age: 25,
//   password: "qwerty",
// методи
// this - контекст (посилання на обʼєкт, для якого викликано метод, він перед крапкою при виклику)
// Повна форма
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   changePassword: function (newPassword) {
//     this.password = newPassword;
// },
// Скорочена форма
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   changePassword(newPassword) {
//     this.password = newPassword;
//   },
// };

// function getFullName(firstName, lastName){
//     return `${firstName} ${lastName}`;
// }

// const fullName = getFullName(user.firstName, user.lastName);
// console.log(fullName);

// const userFullName = user.getFullName();
// console.log(userFullName);

// user.changePassword("123456");
// console.log("user :>> ", user);

// Task: Написати метод для зміни кольору машини

// const car = {
//   mark: "Mitsubishi",
//   module: "Lancer",
//   data: 2008,
//   numberPlate: "ВА0415HB",
//   color: "lightgray",
//   changeColor(newColor) {
//     this.color = newColor;
//   },
// };
// car.changeColor("Orange");
// console.log("car :>> ", car);

// Перебрати car за допомогою for..in
// Результати вивести у вигляді car.властивість = значення

// for (key in car) {
//     console.log(`car: ${key} = ${car[key]}`)
// }

// Синтакс обчислювальних властивостей

// const property = "firstName";
// console.log(user[property]); // user.firstName

// const userProp = prompt("Input property:");
// console.log(user[userProp]);

// // Перебір обʼєкту for..in
// for (const key in user) {
//   console.log("key :>> ", key, user[key]);
// }

// Перегляд обʼєкту в консолі
console.dir(user);

// Функція - обʼєкт
console.dir(function f(q, w) {});

// Вкладені обʼєкти

const human = {
  name: "Ivo",
  physParams: {
    height: 1.8,
    weight: 75,
  },
};
console.log("human :>> ", human);
console.log(human.physParams.height);

