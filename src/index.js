import "./style.css";
import { greeting } from "./greeting.js";
import doraemon from "./doraemon.jpeg";

console.log(greeting);
const img = document.createElement("img");
img.src = doraemon;

document.body.appendChild(img);

const sum = (a, b) => {
  a + b;
};

console.log(sum(1, 2));
