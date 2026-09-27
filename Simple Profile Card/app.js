let heading = document.getElementById("heading1");
heading.textContent = "My Student Profile";


let studentName = document.getElementsByClassName("name");
studentName[0].style.color = "blue";


let messages = document.querySelectorAll(".message");
messages.forEach(item => item.style.color = "green")


let body = document.body
body.style.backgroundColor = "lightgray"
let button = document.getElementById("colorBtn");
button.addEventListener("click", () => {
    body.style.backgroundColor = "lightblue";
});


let link = document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("target", "_blank");


let box = document.getElementById("box");
box.classList.add("active");
console.log(box.classList.contains("active"));
console.log(box.parentElement);
