// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOBRl71NWEMZ0WyU2DNZocYvesQwPRsU0",
  authDomain: "warehouse-management-sys-3683f.firebaseapp.com",
  projectId: "warehouse-management-sys-3683f",
  storageBucket: "warehouse-management-sys-3683f.appspot.com",
  messagingSenderId: "512256797608",
  appId: "1:512256797608:web:93c1d546e664eb5a9f4b9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;