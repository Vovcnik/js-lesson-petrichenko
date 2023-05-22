"use strict";

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

