 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
 import { getAuth , createUserWithEmailAndPassword , onAuthStateChanged , signInWithEmailAndPassword ,signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
 import {getFirestore ,collection, addDoc , getDocs ,  doc, deleteDoc , updateDoc , getDoc , setDoc , serverTimestamp} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
 import { getStorage , ref , uploadBytes , getDownloadURL , uploadBytesResumable} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCpuVu0XfSzdOp4k0TEsVVAv27ux-6Utho",
  authDomain: "to-do-list-web-app-7695e.firebaseapp.com",
  projectId: "to-do-list-web-app-7695e",
  storageBucket: "to-do-list-web-app-7695e.firebasestorage.app",
  messagingSenderId: "987016138522",
  appId: "1:987016138522:web:1d5a9ce2efcb6a907be6a3",
  measurementId: "G-HF1T36QQY3"
};

 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)
 const db = getFirestore(app);
 const storage = getStorage(app);


 export { doc, deleteDoc,db,signOut  , collection,addDoc, getDocs ,auth , createUserWithEmailAndPassword , onAuthStateChanged , signInWithEmailAndPassword , updateDoc , getDoc , storage ,ref , uploadBytes , getDownloadURL , uploadBytesResumable, setDoc , serverTimestamp}