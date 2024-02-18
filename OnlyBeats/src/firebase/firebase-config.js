//////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBER5B6VXW3wVYqvIJERFwWuoLN0cuBGLA",
  authDomain: "onlybeatsss-3f220.firebaseapp.com",
  projectId: "onlybeatsss-3f220",
  storageBucket: "onlybeatsss-3f220.appspot.com",
  messagingSenderId: "103852255104",
  appId: "1:103852255104:web:e4fbcdaaee77bb7dfa8365",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
