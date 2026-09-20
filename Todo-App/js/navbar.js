import { requireAuth } from "../authState.js"
import { getUserProfile } from "../data.js";
const wellcomeBack = document.getElementById("wellcome-back")
const navbarProfile = document.getElementById("navbar-profile");
requireAuth("/login.html", async(user) => {
    let userData = await getUserProfile(user?.uid);
    fetchUserData(userData)
    wellcomeBack.innerHTML = `Welcome back, ${userData?.firstName}👋`
})

function fetchUserData (user) {
  const { firstName, lastName, email, username } = user;
  const initial = (firstName?.[0] || username?.[0] || email?.[0] || "U").toUpperCase();

  navbarProfile.innerHTML = `
    <div class="avatar-container avatar-initials">
      <span>${initial}</span>
    </div>
    <h2 class="user-name">${firstName || ""} ${lastName || ""}</h2>
    <p class="user-email">${email || ""}</p>
  `;
};