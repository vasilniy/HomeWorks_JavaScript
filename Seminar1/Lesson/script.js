const celsius = Number(prompt("Введите градусы цельсия"));
if (!isNaN(celsius)) {
  console.log("Температура по Фаренгейту = " + ((9 / 5) * celsius + 32));
}
else {
    console.log("Вы ввели неправильное значение");
}

let userName = prompt("Введите свое имя: ");
let adminName = userName;
console.log("Переменная adminName = " + adminName);