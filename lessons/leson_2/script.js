"use strict"
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?")
let personalMovieDB ={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
const a =prompt("Один из последних просмотреных фильмов?","")
const b = prompt("на сколько оцените его?","")
const c =prompt("Один из последних просмотреных фильмов?","")
const d = prompt("на сколько оцените его?","")

personalMovieDB.movies[a]= b;
personalMovieDB.movies[c]= d;
console.log(personalMovieDB);
