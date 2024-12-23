// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKVZXRl2QDhG-Lg8SWDxEhsbXZ8UO2zhU",
  authDomain: "kishan-netflix.firebaseapp.com",
  projectId: "kishan-netflix",
  storageBucket: "kishan-netflix.firebasestorage.app",
  messagingSenderId: "388269290785",
  appId: "1:388269290785:web:684616e7261dccb64a7a60",
  measurementId: "G-BTGLFPTPVP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//now this firebaseAuth will point towards our netflix clone application.
export const firebaseAuth = getAuth(app);
