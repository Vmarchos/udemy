"use strict";

const div = document.createElement("div");
const btns = document.getElementsByTagName("button");
const circles = document.getElementsByClassName("circle");
const wrapper = document.querySelector(".wrapper");
const hearts = document.querySelectorAll(".heart");
const oneHeart = document.querySelector("heart");

div.classList.add("black");

wrapper.append(div);

// wrapper.prepend(div);

// hearts[0].before(div);

// hearts[0].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

// wrapper.appendChild(div);

// wrapper.insertBefore(div, hearts[1])

// wrapper.removeChild(hearts[1]);

div.innerHTML = "<h1>hello world </h1>";

// div.textContent ="HELLO";

div.insertAdjacentHTML(" ", "<h2>Hello</h2>");
