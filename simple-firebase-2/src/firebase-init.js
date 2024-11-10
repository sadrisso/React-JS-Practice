// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQKaFJZ_QTlkKNlGnYKvtR6fduUa-cNXA",
  authDomain: "auth-moha-milon-de5cf.firebaseapp.com",
  projectId: "auth-moha-milon-de5cf",
  storageBucket: "auth-moha-milon-de5cf.firebasestorage.app",
  messagingSenderId: "673580944193",
  appId: "1:673580944193:web:c8f45a2664e45ec3446fc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);