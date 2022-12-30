// Задание № 1
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

// Задание №2
