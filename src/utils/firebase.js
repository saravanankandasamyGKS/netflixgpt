// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqpWMUoXS0smvDqwu_7nVydD6FqxIocHA",
  authDomain: "netflixgpt-5f1e3.firebaseapp.com",
  projectId: "netflixgpt-5f1e3",
  storageBucket: "netflixgpt-5f1e3.firebasestorage.app",
  messagingSenderId: "1001626798870",
  appId: "1:1001626798870:web:7c271b0535b986ccbbde37",
  measurementId: "G-MH9FGWT0G4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

 export const auth = getAuth(app);
