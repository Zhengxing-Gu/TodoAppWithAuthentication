// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaJt2Q6S35y0GODlkD9wwZzGdwPiDfGP0",
  authDomain: "todowithauth-a8178.firebaseapp.com",
  databaseURL: "https://todowithauth-a8178-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todowithauth-a8178",
  storageBucket: "todowithauth-a8178.appspot.com",
  messagingSenderId: "444339464164",
  appId: "1:444339464164:web:3b989961934d3e01e349f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();