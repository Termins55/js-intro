const firstName = "Test";
const lastName = "Testovych";
const age = 25;

// Обʼєкти

const obj1 = {}; // синтаксичний цукор
const obj2 = Object();
const obj3 = new Object();

console.log(obj1);
// // alert(obj1); // не підтримує виведення обʼєктів

// // Ініціалізація

// Властивості - рядки, symbol()
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

const car = {
    mark: 'Mitsubishi',
    module: 'Lancer',
    data: 2008,
    numberPlate: 'ВА0415HB',
    color: 'lightgray',
}
console.log('car :>> ', car);

car.color = 'black';
delete car.data;

console.log('car :>> ', car);

car.firstName = 'Ihor';
car.secondName = 'Filipiev';
console.log('car :>> ', car);

// Зробити копії для car

const car2 = Object.assign({}, car);
car2.color = 'White'
console.log("car2 :>> ", car2);
console.log(car2 === car);

const car3 = {...car};
car3.module = 'RX7'
console.log('car3 :>> ', car3);
console.log(car3 === car);

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

