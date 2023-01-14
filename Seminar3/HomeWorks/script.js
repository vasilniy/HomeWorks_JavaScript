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
/*
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
*/

//Задание №3. Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию,
// которая определяет максимальное значение среди этих чисел

function FindMaxNumber(num1, num2, num3) {
  let max = num1;
  if (num2 > max) max = num2;
  if (num3 > max) max = num3;

  return max;
}

const numFisrt = +prompt("Введите первое целое число");
const numSecond = +prompt("Введите второе целое число");
const numThird = +prompt("Введите третье целое число");
console.log("Вы ввели = " + numFisrt + ", " + numSecond + ", " + numThird);
console.log(
  "Максимальное значение среди этих чисел = " +
    FindMaxNumber(numFisrt, numSecond, numThird)
);

// Задание №4.
/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.*/
/*
const Addition = (num1, num2) => num1 + num2; // сложение
const Multiplication = (num1, num2) => num1 * num2; // умножение
const Division = (num1, num2) => num1 / num2; // деление
function Difference(num1, num2) { // разность
  let result = 0;
  if (num1 != num2) {
    if (num1 > num2) {
      result = num1 - num2;
    }
    else {
      result = num2 - num1;
    }
  } 
  return result;
}

const numFisrt = +prompt('Введите первое целое число');
const numSecond = +prompt('Введите второе целое число');
console.log('Сложение ' + Addition(numFisrt, numSecond));
console.log('Умножение ' + Multiplication(numFisrt, numSecond));
console.log('Деление ' + Division(numFisrt, numSecond));
console.log('Разность ' + Difference(numFisrt, numSecond));
*/
