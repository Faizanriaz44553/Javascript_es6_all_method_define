import { redirectIfLoggedIn } from "../authState.js";
import { auth, signInWithEmailAndPassword } from "../firebase.js";

let submit = document.querySelector("#login-btn");
let passwordInput = document.querySelector("#login-password");
let emailInput = document.querySelector("#login-email");

async function login() {
  let email = emailInput.value.trim();
  let password = passwordInput.value.trim();
  if (!email || !password) {
      return  Swal.fire({
      title: "Please fill in all required fields.",
      icon: "error",
    });
  }
  try {
    const userCrendential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
      const user = userCrendential.user;
      userUid = user
    console.log(user.uid);
    localStorage.setItem("user", user.uid);
    window.location.href = "../pages/dashboard.html";
    Swal.fire({
      title: "Login successful!",
      icon: "success",
    });
  } catch (error) {
      console.log(error.message);
           return  Swal.fire({
      title: error.message,
      icon: "error",
    });
  }
}
submit.addEventListener("click", login);

redirectIfLoggedIn("../pages/dashboard.html");
