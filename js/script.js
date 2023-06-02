'use strict';

//числа
// let number = 4.6;
// console.log(-4 / 0);
// console.log('string' * 9);
// //строка
// const persone = "5";
// const bool = false;
// let und;
// console.log(und);
// //объект
// const obg = {
// 	name: "John",
// 	age: 25,
// 	isMarried: false
// };
//console.log(obg.name);

//массив (любой тип данных)
// let arr = ['plum.png', 'orange.jpg', 'apple.bpm'];

// console.log(arr[0]);

//alert('helloy');
//const result = confirm('Are you here?');
//console.log(result);

//const answer = +prompt("Вам есть 18?", "18 "); //+ преобразовывает в число
//console.log(answer + 5);

// const answers = []; - массив пустой
// answers[0] = prompt('Как ваше имя?', " ");
// answers[1] = prompt('Как ваше фамилия?', " ");
// answers[2] = prompt('Сколько Вам лет?', " ");

// console.log(typeof (answers));
// console.log(typeof (null)); ошибка js
// typeof оператор определения типы данных
//интреполяция
// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`); //c косыми кавычками

// const user = "Vova";
// alert(`Привет, ${user}`); //c косыми кавычками бэктики

// массив частый случай объекта

// console.log('arr' + "- object");
// // console.log(4 + +"5"); унарный плюс

// // инкремент и декримент

// let incr = 10,
// 	dec = 10;

// incr++; инкремент
// dec--; декримент

// ++incr; префиксная форма записи
// --dec; префиксная форма записи

// incr++; постфиксная форма записи не правильно
// dec--; постфиксная форма записи
// console.log(dec);

// console.log(5 % 2); остаток от деления двух чисел
// = присваивание
// console.log(2 * 5 == 10);
// === строгое стравнение
// 	&& и
// 	|| или
// оператор отрицание!

/* Задание на урок: 01

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
	 - count - сюда передается ответ на первый вопрос
	 - movies - в это свойство поместить пустой объект
	 - actors - тоже поместить пустой объект
	 - genres - сюда поместить пустой массив
	 - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
	 - 'Один из последних просмотренных фильмов?'
	 - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
	 movies: {
		  'logan': '8.1'
	 }

Проверить, чтобы все работало без ошибок в консоли */

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	private: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ""),
// 	b = prompt('На сколько оцените его?', ""),
// 	c = prompt('Ваш любимый фильм?', ""),
// 	d = prompt('На сколько оцените его?', "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// условия

// if (4 == 4) {
// 	console.log('ok');
// } else {
// 	console.log('error');
// };

// const num = 50;

// if (num < 49) {
// 	console.log('error');
// } else if (num > 100) {
// 	console.log('Много');
// } else {
// 	console.log('ok');
// }

// (num === 500) ? console.log('ok') : console.log('error');

// ? тернарный оператор

// const num = 50;
// switch (num) {
// 	case 49:
// 		console.log('неверно');
// 		break;
// 	case 100:
// 		console.log('неверно');
// 		break;
// 	case 500:
// 		console.log('верно');
// 		break;
// 	default:
// 	case 49:
// 		console.log('не в этот раз');
// 		break;
// }
// break останавливает если верно

// циклы

// let num = 50;
// while (num <= 55) {
// 	console.log(num);
// 	num++;
// }
// let num = 50;
// do {
// 	console.log(num);
// 	num++;
// }

// while (num < 55);

// let num = 50;
// for (let i = 1; i < 10; i++) {
// 	if (i === 6) {
// 		// break;
// 		continue;
// 	}
// 	console.log(i);

// }

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false

// };

// for (let i = 0; i < 2; i++) {
// 	const a = prompt('Один из последних просмотренных фильмов?', ''),
// 		b = prompt('На сколько оцените его?', '');

// 	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 		personalMovieDB.movies[a] = b;
// 		console.log('done');
// 	} else {
// 		console.log('error');
// 		i--;
// 	}
// }

// if (personalMovieDB.count <= 10) {
// 	console.log('мало фильмов');
// }
// else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 	console.log('Вы классический зритель');
// } else if (personalMovieDB >= 30) {
// 	console.log('Вы киноман');
// } else {
// 	console.log('Произошла ошибка');
// }

// console.log(personalMovieDB);

// const ege = +prompt('Сколько Вам лет?', '');
// if (ege < 18) {
// 	console.log('Нельзя продавать');
// } else if (ege >= 18 && ege <= 20) {
// 	console.log("Можно продавать");
// } else if (ege >= 21) {
// 	console.log("Можно водку");
// }

// console.log(ege);

// объявление функции
// function showFirstMessage(text) {
// 	console.log(text);
// }
// showFirstMessage('Hello word');
// function calc(a, b) {
// 	return (a + b);
// }

// return возвращает во внешний мир и  окончание функции

// console.log(calc(4, 3));
// console.log(calc(7, 9));
// console.log(calc(8, 3));

// глобальна переменная
let num = 20;
function showFirstMessage(text) {
  console.log(text);
  // локальная переменная
  num = 20;
  console.log(num);
}

showFirstMessage();
console.log(num);

// const calc = (a, b) => {return a + b }; не имеет
//  выражения функции объекты
// все сущности объекты
// объект это набор свойст "имя значение"
{
  visible: true;
}

// массив обэект
// функция обеек
// тчисло обеект
// строка ичисло ведут сеьбя как объект

// console.log(''); // метод объекта log в скобках аргумент другие dir table

// console.log(' имя');

function a() {
  console.log('Hey there');
}
a();

a = 10;
a(); // ошибка функция переопределена TypeError: a is not a function
