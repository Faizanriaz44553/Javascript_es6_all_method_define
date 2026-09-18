import { auth, onAuthStateChanged } from "./firebase.js";

export function redirectIfLoggedIn(redirectTo) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.href = redirectTo;
    }
  });
}

export function requireAuth(redirectTo, onUserAuthenticated) {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = redirectTo;
    } else {
      if (typeof onUserAuthenticated === "function") {
        onUserAuthenticated(user);
      }
    }
  });
}