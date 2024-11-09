
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5_TIBGFusxjl1_Z9i-1xC0fkiY6XT8wk",
  authDomain: "simple-firebase-2-fcfd2.firebaseapp.com",
  projectId: "simple-firebase-2-fcfd2",
  storageBucket: "simple-firebase-2-fcfd2.firebasestorage.app",
  messagingSenderId: "504878287351",
  appId: "1:504878287351:web:25b1f428b8629ab51c46f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

