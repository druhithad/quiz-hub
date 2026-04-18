import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVB6yy8kZvOB9j7qpgxGBJucFO9k_Xbv4",
  authDomain: "quizhub-deaea.firebaseapp.com",
  projectId: "quizhub-deaea",
  storageBucket: "quizhub-deaea.firebasestorage.app",
  messagingSenderId: "465777448744",
  appId: "1:465777448744:web:455f301f678441a1da221d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);