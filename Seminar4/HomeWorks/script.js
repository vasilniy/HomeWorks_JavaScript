//********************  Урок 4. Циклы и массивы  *********************

/*
Задание №1. Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число                 */
/*
for (let i = 0; i < 11; i++) {
  if (i == 0) {console.log(i + ' - это же нуль!')};
  if (i%2 == 0 && i != 0) {console.log(i + ' - это же четное число!')}
    else if (i%2 != 0) {console.log(i + ' - это нечетное число!')};
}
*/

/*
Задание №2.
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]      */

/*
const array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);
array.splice(3, 2);
console.log(array);
*/

/*
Задание №3.
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3          */



/*
Задание №4.
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx                          */



/*
Задание №5. Построить таблицу умножения как в тетрадках от 2 до 9 (Не обязательное)           */

/*
Задание №6. Реализовать алгоритм умножения матриц (Не обязательное) */