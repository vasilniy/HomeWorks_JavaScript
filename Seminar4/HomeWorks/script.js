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
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function getSumm(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i] + sum;    
  }
  return sum;
}
function getMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];    
  } 
  return min;
}
function findNumber(arr) {
  let find = false;
  for (let i = 0; i < arr.length; i++) {    
    if (arr[i] == 3) {
      find = true;      
    }     
  }
  if (find) {console.log('В данном массиве есть число 3');
  }
  else console.log('В данном массиве числа 3 нет');   
}

const myArray = [];
for (let i = 0; i < 5; i++) {
  myArray.push(getRandomNumber(0 , 10)); 
}

console.log(myArray);

console.log('Сумма всех элементов = ' + getSumm(myArray));
console.log('Минимальное число = ' + getMin(myArray));
findNumber(myArray);

*/

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
let hill = '';
for (let i = 0; i < 20; i++) {
  hill = hill + 'x';
  console.log(hill);
}
*/

/*
Задание №5. Построить таблицу умножения как в тетрадках от 2 до 9 (Не обязательное)           */
/*
let count = 2;
for (let i = 1; i < 4; i++) {  
  for (let j = 1; j < 10; j++) {
    console.log(`${count} * ${j} = ${(count) * j}                 ${count+1} * ${j} = ${(count+1) * j}                 ${count+2} * ${j} = ${(count+2) * j}`);
    
  }
 count = count + 3;
 console.log(''); 
}
*/

const array1 =
  [
    [ 2, 8, 4 ],
    [ 4, 2, 0 ],
    [ 1, 7, 5]
  ];

const array2 =
  [
    [ 8, 4, 1 ],
    [ 2, 0, 9 ],
    [ 7, 5, 4 ]
  ];

function multiplication (arr1, arr2) {
  const myArray = new Array(arr1.length);
  for (let x = 0; x < arr1.length; x++) {   
    myArray[x] = new Array(arr2.length) 
    for (let i = 0; i < arr1.length; i++){
        let number = 0;
        for (let j = 0; j < arr1[i].length; j++) {
        number = arr1[x][j] * arr2[j][i] + number;// + arr1[i][j+1] * arr2[j+1][i] + arr1[i][j+2] * arr2[j+2][i];
        
            
      }    
    
    myArray[x][i] = number;
    
    }
  
  }
  return myArray;
}
console.log(array1);
console.log('');
console.log(array2);
console.log('');
console.log('Перемноженные матрицы:');
console.log(multiplication(array1, array2));

/*
Задание №6. Реализовать алгоритм умножения матриц (Не обязательное) */