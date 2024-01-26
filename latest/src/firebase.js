// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "driv-9a911.firebaseapp.com",
    projectId: "driv-9a911",
    storageBucket: "driv-9a911.appspot.com",
    messagingSenderId: "1021436511536",
    appId: "1:1021436511536:web:bc8991b957dbc8a8c0f4f5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);