// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHco18B2e9t19f5RBLrMoqPPUKdkJ-9cs",
  authDomain: "schoolmap-7f024.firebaseapp.com",
  projectId: "schoolmap-7f024",
  storageBucket: "schoolmap-7f024.appspot.com",
  messagingSenderId: "727028603577",
  appId: "1:727028603577:web:fbae3498746b122c28d968"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;