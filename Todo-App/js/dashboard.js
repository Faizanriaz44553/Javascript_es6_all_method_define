const dateElement = document.getElementById("nav-date");
const now = new Date();


const dayName = now.toLocaleDateString("en-US", { weekday: "long" });
const day = now.getDate()
const month = now.getMonth() + 1
const year = now.getFullYear();

dateElement.innerHTML = `
  <span class="day d-block">${dayName}</span>
  <span class="full-date d-block">${day}/${month}/${year}</span>
`;