import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfgmS3CK5qelbPFp8CqGPykYNloaqQjWk",
  authDomain: "portfolio-49ace.firebaseapp.com",
  projectId: "portfolio-49ace",
  storageBucket: "portfolio-49ace.firebasestorage.app",
  messagingSenderId: "640166111439",
  appId: "1:640166111439:web:a64b1ae4447692c83d2fba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
