// рядки - псевдомасиви

const str = "qwerty";

// console.log(str.length);
// console.log(str[1]);

// Рядки не можна змінювати !!!
// str[5] = "q";

// const str1 = str.slice(0, 5) + "q";
// console.log(str1);

// 'qwerty'.startsWith('qw') - true
// 'qwerty'.endsWith('t5y') - false // qwerty'.endsWith('ty') - true
// 'qwerty'.includes('wer') - true
// 'qwerty'.toLowerCase()
// 'qwerty'.toUpperCase()

// Task: Написати функцію, яка за рядком ("Ivo Smith") сформує рядок з ініціалами ("IS")

function getInitials(name) {
  // Знайти пробіл
  const spaceIndex = name.indexOf(" ");
  console.log(spaceIndex);
  // return Потрібен 1й символ + Взяти символ після пробіла
  return (name[0] + name.slice(spaceIndex + 1, spaceIndex + 2)).toUpperCase();
}

const initials = getInitials("ivo Smith");
console.log(initials)