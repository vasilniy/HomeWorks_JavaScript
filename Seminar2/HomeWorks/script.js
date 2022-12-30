// Задание № 1
/*
const num1 = Number(prompt("1. Введите первое целое число: "));
const num2 = Number(prompt("2. Введите второе целое число: "));
if (!isNaN(num1)) {
  if (num1 === 1) {
    console.log("Переменая num1 = 1");
  }
  if (num1 < 1) {
    console.log("Переменая num1 < 1");
  }
  if (num1 > 1) {
  console.log("Переменая num1 > 1");
  }
}
else console.log("Вы ввели что-другое, по условию необходимо целое число!");

if (!isNaN(num2)) {
  if (num2 === 3) {
    console.log("Переменая num2 = 3");
  }
  if (num2 < 3) {
    console.log("Переменая num2 < 3");
  }
  if (num2 > 3) {
  console.log("Переменая num2 > 3");
  }
}
else console.log("Вы ввели что-другое, по условию необходимо целое число!");
*/

// Задание №2
/*
let test = true;
test ? console.log("+++") : console.log('---');
*/

//Задание №3
/*
let day = Number(prompt("Введите второе целое число, от 1 до 31(вкл): "));
if (!isNaN(day)) {
  if (day >= 1 && day < 11) {
    console.log("Первая декада месяца");
  }
  if (day >= 11 && day < 21) {
    console.log("Вторая декада месяца");
  }
  if (day >= 21 && day <=31) {
  console.log("Третья декада месяца");
  }
  if (day < 1 || day > 31) {
    console.log('Такого числа не может быть в месяце!');
  }
}
else console.log("Вы ввели что-другое, по условию необходимо целое число!");
*/

// Задание №4

let numberDigit = Number(
  prompt("Введите любое целое положительное трехзначное число")
);
let numberDigitFirst = numberDigit;
let units = 0;
let tens = 0;
let hundreds = 0;
let index = 1;
if (!isNaN(numberDigit) && numberDigit > 100) {
  units = numberDigit % 10;
  numberDigit = (numberDigit - units) / 10;
  tens = numberDigit % 10;
  numberDigit = (numberDigit - tens) / 10;
  hundreds = numberDigit % 10;
} else
  console.log(
    "Вы ввели что-другое, по условию необходимо целое положительное трехзначное число!"
  );
if (!isNaN(numberDigit) && numberDigitFirst > 100) {
  console.log(
    "В числе " +
      numberDigitFirst +
      " количество сотен: " +
      hundreds +
      ", десятков: " +
      tens +
      ", единиц: " +
      units
  );
}
else
  console.log(
    "Число не трехзначное!"
  );
