/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let card = document.querySelector(".card");
let btn = document.querySelector(".mybtn");
let nIntervalId = setInterval(generateCard, 10000); //Change card every 10 seconds.
let inputw = document.querySelector("#wcard");
let inputh = document.querySelector("#hcard");

window.onload = generateCard;
btn.addEventListener("click", generateCard); //Change card onclick event.

inputw.addEventListener("change", function(event) {
  if (inputw.validity.valid)
    card.setAttribute(
      "style",
      `width:${inputw.value}px; height:${card.clientHeight}px;`
    );
});
inputh.addEventListener("change", function(event) {
  if (inputh.validity.valid)
    card.setAttribute(
      "style",
      `width:${card.clientWidth}px;height:${inputh.value}px;`
    );
});

function generateCard() {
  let symbols = { 0: "♦", 1: "♥", 2: "♠", 3: "♣" };
  let colors = { 0: "red", 1: "red", 2: "black", 3: "black" };
  let letters = { 1: "A", 11: "J", 12: "Q", 13: "K" };
  let i = Math.floor(Math.random() * 4);
  let n = Math.floor(Math.random() * 12) + 1;

  let divCard = document.querySelector(".card");
  divCard.style.color = colors[i];

  let divsymbols = document.querySelectorAll(".symbol");
  divsymbols[0].innerHTML = `<span>${symbols[i]}</span>`;
  divsymbols[1].innerHTML = `<span>${symbols[i]}</span>`;
  document.querySelector(".number").innerHTML = `<span>${
    n < 2 || n > 10 ? letters[n] : n
  }</span>`;
}
