import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA9sGILN7YH3LwUcEHij7xquLlG1eHUcww",
    authDomain: "comment-113c3.firebaseapp.com",
    projectId: "comment-113c3",
    storageBucket: "comment-113c3.firebasestorage.app",
    messagingSenderId: "828830805706",
    appId: "1:828830805706:web:40bc9d3be85b9c2fface33",
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };