/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function onLoad(array1, array2, array3, array4) {
  const excuses =
    array1[Math.floor(Math.random() * array1.length)] +
    " " +
    array2[Math.floor(Math.random() * array2.length)] +
    " " +
    array3[Math.floor(Math.random() * array3.length)] +
    " " +
    array4[Math.floor(Math.random() * array4.length)];
  return excuses;
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  console.log(onLoad(who, action, what, when));

  const pTagHtmlElement = document.querySelector("#excuse");
  pTagHtmlElement.innerHTML = onLoad(who, action, what, when);
};
