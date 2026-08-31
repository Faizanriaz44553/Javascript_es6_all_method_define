var limit = 5;
var remdom = Math.floor(Math.random() * 100);
var guess = document.querySelector("#input");
let para = document.querySelector("#para");
let limitPara = document.querySelector("#limitPara");

function guessGame() {
    let check = true;
    if (guess.value.trim() === "") {
        return para.textContent = "First enter number!😒"
    }
  for (let i = 1; i <= limit; i++) {
    if (Number(guess.value) === remdom) {
        para.textContent = "Congratulations Tou Win!😊"
        guess.value = "";
        break
    } else if (guess.value < remdom) {
      para.textContent = "Too Low! 😒"
      guess.value = "";
      limit -= 1;
      break;
    } else if (guess.value > remdom) {
      para.textContent = "Too High! 😒"
      guess.value = "";
      limit -= 1;
      break;
    }
  }
  if (!check) {
    return para.textContent = "You Lose! 😢"
  }
  limitPara.textContent = limit;
}
// console.log(guessGame());
