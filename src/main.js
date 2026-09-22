import "./style.css";
import { welcomeMessage } from "./messages.js";
import { currentYear } from "./year.js";

document.querySelector("#year").textContent = "Fall " + currentYear;
document.querySelector("#message").textContent = welcomeMessage;

console.log(currentYear);
console.log(welcomeMessage);