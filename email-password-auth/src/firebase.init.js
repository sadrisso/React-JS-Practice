// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKogu1VtmzpqGYQsqts4PNdVeb8kZ0Wvc",
  authDomain: "email-pass-auth-11e37.firebaseapp.com",
  projectId: "email-pass-auth-11e37",
  storageBucket: "email-pass-auth-11e37.firebasestorage.app",
  messagingSenderId: "990110646724",
  appId: "1:990110646724:web:9528d3e33af65783f2e491"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);