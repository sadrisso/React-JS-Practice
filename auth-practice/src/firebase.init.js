// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaa97gbB33aJxFB3-ImeRIiO4ysq53lko",
  authDomain: "auth-practice-4e046.firebaseapp.com",
  projectId: "auth-practice-4e046",
  storageBucket: "auth-practice-4e046.firebasestorage.app",
  messagingSenderId: "748867695880",
  appId: "1:748867695880:web:75098d45ff17b4656b28bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);