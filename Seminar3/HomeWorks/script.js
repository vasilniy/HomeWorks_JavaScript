// Задание № 1. Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
/*
let numberСubed = (number) => number **3;
let num = +prompt('Введите целое число');
console.log(numberСubed(num));
console.log(numberСubed(num + 1));
console.log(numberСubed(num) + numberСubed(num + 1));
*/

// Задание №2. Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

function salary(number) { // Не стал записывать в ввиде стрелочной функции, как в Задании №1
  return number * 0.87;
}

let num = +prompt('Введите целое число');
if (isNaN(num)) {
  console.log('значение задано неверно');
}
else {
  console.log('Размер заработной платы за вычетом налогов равен = ' + salary(num));
}


//Задание №3

// Задание №4
