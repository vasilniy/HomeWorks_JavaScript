//Урок 5. Объекты в JavaScript
/*
1
Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.
*/
/*
const numbers = {
      keyin1: 1,
      keyin2: 2,
      keyin3: 3,
      keyin4: 4,
      keyin5: 5,
      keyin6: 6,
      keyin7: 7,
}

for (const key in numbers) {
  if (numbers[key] >= 3) { console.log(numbers[key]); }  
  }
*/

/*
2. Необходимо из объекта, который лежит в константе post вывести значения, к
которым приписан комментарий, в консоль. */

/*
const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: 
    [
      {
        userId: 10,
        userName: "Alex",
        text: "lorem ipsum",
        rating: {
          likes: 10,
          dislikes: 2, // вывести это число
        },
      },
      {
        userId: 5, // вывести это число
        userName: "Jane",
        text: "lorem ipsum 2", // вывести этот текст
        rating: {
          likes: 3,
          dislikes: 1,
        },
      },
    ],
}             

console.log(post);
console.log('author: "John" = ' + post.author);
console.log('dislikes: 2 = ' + post.comments[0].rating.dislikes);
console.log('userId: 5 = ' + post.comments[1].userId);
console.log('text: "lorem ipsum 2" = ' + post.comments[1].text);
*/

/*
3 Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя
метод forEach. */

/*
const products = [
      {
        id: 3,
        price: 200,
      },
      {
        id: 4,
        price: 900,
      },
      {
        id: 1,
        price: 1000,
      },
];

products.forEach(element => {
  console.log(element.price + '-15% = ' + element.price * 0.85);
  element.price *= 0.85;
});
console.log(' ');
console.log(products);

*/

/*
4 Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter.
Исходные данные - массив products. Необходимо отсортировать массив products используя метод sort по цене,
начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.
*/
/*
const products = [
      {
        id: 3,
        price: 127,
        photos: [
          "1.jpg",
          "2.jpg",
        ],
      },
      {
        id: 5,
        price: 499,
        photos: [],
      },
      {
        id: 10,
        price: 26,
        photos: [
          "3.jpg",
        ],
      },
      {
        id: 8,
        price: 78,
      },
];

const result = products.filter(myPhoto => myPhoto.photos).filter(my => my.photos.length != 0);
console.log(result);
console.log(' ');
const result2 = products.sort(( a, b ) => a.price - b.price);
console.log(result2);

*/

/*
5. Дано 2 массива
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами,
а значения второго массива — значениями.
    */
/*

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const weeks = {};
for (let i = 0; i < en.length; i++) {
  weeks[en[i]] = ru[i];  
}

console.log(weeks);
*/


/*
6 (не обязательное) Напишите программу, которая создает игру-викторину с набором вопросов и ответов на них.
Программа позволяет пользователю вводить ответ на каждый вопрос.
Программа должна проверить ответы пользователя и вывести количество правильных ответов в консоль.

Объяснение:
Эта программа создаст объект с именем quiz, который содержит несколько свойств:

questions: Массив объектов, представляющих вопросы викторины.
Каждый объект вопроса будет иметь свойство подсказки для текста вопроса и свойство выбора для возможных ответов.
correctAnswers: Массив правильных ответов, соответствующих вопросам в массиве вопросов.

Программа будет использовать цикл for, чтобы перебирать вопросы и запрашивать у пользователя ответ.
В процессе перебора сравниваем ответ пользователя с правильным ответом.
Если ответ правильный, то увеличиваем кол-во правильных ответ.
В итоге, программа выведет в консоль количество правильных ответов и сколько всего было вопросов.

let quiz = {
  questions: [
    {prompt: "What is the capital of France?", choices: ["Paris", "London", "Berlin", "Madrid"]},
    {prompt: "What is the largest planet in our solar system?", choices: ["Jupiter", "Mars", "Earth", "Saturn"]},
    {prompt: "What is the smallest country in the world?", choices: ["Vatican City", "Monaco", "Nauru", "Tuvalu"]}
  ],
  correctAnswers: ["Paris", "Jupiter", "Vatican City"]
};

*/