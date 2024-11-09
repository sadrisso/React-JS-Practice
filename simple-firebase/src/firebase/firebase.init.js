// Do not store config on the client side

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4aQPfr66Fkb6vW-agjrjkXRqtyfForT8",
  authDomain: "simple-firebase-788cb.firebaseapp.com",
  projectId: "simple-firebase-788cb",
  storageBucket: "simple-firebase-788cb.firebasestorage.app",
  messagingSenderId: "585581111057",
  appId: "1:585581111057:web:45579f03d7948aa54b0eb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;