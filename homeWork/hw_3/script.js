"use strict";

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyfilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотреных фильмов?", "").trim();
      const b = prompt("на сколько оцените его?", "").trim();
      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("вы киноман");
    }
  },
  showMyDb: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenries: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();

      if (genre === "" || genre === null) {
        console.log("Вы ввели некоректные данные, или не ввели их вовсе");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
};
// personalMovieDB.start();
// personalMovieDB.rememberMyfilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDb(personalMovieDB.privat);
// personalMovieDB.writeYourGenries();
