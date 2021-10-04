/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let symbols = { 0: "♦", 1: "♥", 2: "♠", 3: "♣" };
  let colors = { 0: "red", 1: "red", 2: "black", 3: "black" };
  let i = Math.floor(Math.random() * 4);
  let n = Math.floor(Math.random() * 12) + 1;

  let divsymbols = document.querySelectorAll(".symbol");
  divsymbols[0].innerHTML = `<span style="color:${colors[i]}">${symbols[i]}</span>`;
  divsymbols[1].innerHTML = `<span style="color:${colors[i]}">${symbols[i]}</span>`;
  document.querySelector(
    ".number"
  ).innerHTML = `<span style="color:${colors[i]}">${n}</span>`;
};
