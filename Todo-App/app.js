import {
  auth,
  createUserWithEmailAndPassword,
  db,
  doc,
  setDoc,
  serverTimestamp,
  onAuthStateChanged,
} from "./firebase.js";

const submitBtn = document.querySelector("#submit");
const firstNameInput = document.querySelector("#f-name");
const lastNameInput = document.querySelector("#l-name");
const userNameInput = document.querySelector("#u-name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

let isSigningUp = false;

async function handleSubmit(e) {
  e.preventDefault();

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const userName = userNameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password || !firstName) {
    return Swal.fire({
      icon: "error",
      title: "Please fill in all required fields.",
    });
  }

  isSigningUp = true;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      firstName: firstName,
      lastName: lastName,
      username: userName,
      email: user.email,
      createdAt: serverTimestamp(),
    });

    window.location.replace("./pages/dashboard.html");

  } catch (error) {
    isSigningUp = false;

    console.error("FIREBASE ERROR:", error);
    console.error("CODE:", error.code);
    console.error("MESSAGE:", error.message);

    Swal.fire({
      icon: "error",
      title: error.message,
    });
  }
}

submitBtn.addEventListener("click", handleSubmit);

onAuthStateChanged(auth, (user) => {
  if (user && !isSigningUp) {
    window.location.replace("./pages/dashboard.html");
  }
});
// let data = []

// function addContent() {
//     content.innerHTML = ""
//     let value = input.value
//     if (value.trim() === "") {
//        return content.innerHTML = `<li>please enter a few notes</li>`
//     }
//     data.push(value)
//     displayContent()
// }

// function displayContent() {
//     for (let i = 0; i < data.length; i++) {
//         content.innerHTML += `<li>${data[i]}</li>`
//     }
// }

// function clearContent() {
//     data = []
//     content.innerHTML = ""
// }

// function editContent() {

// }
// clear.addEventListener("click", clearContent)
// button.addEventListener("click" , addContent)
