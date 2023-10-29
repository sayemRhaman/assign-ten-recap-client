// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB12jFv4_epED-fyjfKeBtcxTvfr656kxI",
  authDomain: "recap-assignment-ten.firebaseapp.com",
  projectId: "recap-assignment-ten",
  storageBucket: "recap-assignment-ten.appspot.com",
  messagingSenderId: "225242309559",
  appId: "1:225242309559:web:23550a320a92dc411fbe32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;