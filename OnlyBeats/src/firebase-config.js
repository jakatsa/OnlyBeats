import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbUmG1x7scKXiMf51gwWZW23kBuWz-eOQ",
  authDomain: "onlybeats-1acd9.firebaseapp.com",
  projectId: "onlybeats-1acd9",
  storageBucket: "onlybeats-1acd9.appspot.com",
  messagingSenderId: "544377963700",
  appId: "1:544377963700:web:fbbc7508e9fd14612ec3e1",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
