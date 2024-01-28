// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXQkT7qJCh5_eAsLMclPlp9dHZqdjAgPw",
  authDomain: "cosmetics-client-2ad5f.firebaseapp.com",
  projectId: "cosmetics-client-2ad5f",
  storageBucket: "cosmetics-client-2ad5f.appspot.com",
  messagingSenderId: "375135774337",
  appId: "1:375135774337:web:d14dbc76c5db6ef3a60f80",
  measurementId: "G-CHJS54X9XT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;