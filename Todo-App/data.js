import { alertDisplay } from "./errorAlert.js";
import { db, collection, query, where, getDocs, getDoc, doc } from "./firebase.js";

export async function fetchTasksOnce(userId, colName) {
  try {
    const q = query(collection(db, colName), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        return alertDisplay("error" , "empty tasks")
    }
    const tasks = [];
    querySnapshot.forEach((doc) => {
      tasks.push({ id: doc.id, ...doc.data() });
    });

    return tasks;

  } catch (error) {
      alertDisplay("error" , error.message)
  }
}


export async function getUserProfile(userId) {    
  try {
    const userDocRef = doc(db, "users", userId);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
        alertDisplay("error" , "user not found")
    }
  } catch (error) {
    alertDisplay("error" , error.message)
    return null;
  }
}