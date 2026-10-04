import { htmlQuestions, cssQuestions, javascriptQuestions } from "./utils.js";

const form = document.getElementById("form");
const selectquizequs = document.getElementById("selectquizequs");
const verifyQuestions = document.getElementById("verifyQuestions");
const times = document.getElementById("times");
const domTimer = document.getElementById("domTimer");

function QuizeVerificationData(e) {
  e.preventDefault();
  if (verifyQuestions.value === "html") {
    form.innerHTML = "";
    QuizStarted(htmlQuestions, times.value);
  } else if (verifyQuestions.value === "css") {
    form.innerHTML = "";
    QuizStarted(cssQuestions, times.value);
  } else if (verifyQuestions.value === "javascript") {
    form.innerHTML = "";
    QuizStarted(javascriptQuestions, times.value);
  }
}

form.addEventListener("submit", QuizeVerificationData);

function QuizStarted(arr, time) {
    TimeCalc(time , (min, sec)=> {
        console.log(min, sec);
        domTimer.innerHTML= `<span>${min}:</span> <span>${sec}</span>`
    });
}

function TimeCalc(num, callback) {
    let seconds = num * 60;

    let interval = setInterval(() => {
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;

        callback(min, sec);

        seconds--;

        if (seconds < 0) {
            clearInterval(interval);
        }
    }, 1000);
}
