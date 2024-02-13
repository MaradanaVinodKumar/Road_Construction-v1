// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAGEXhRhKSha8P6ulJTl3q6E2nXsBoB38",
    authDomain: "kmvpl-254b9.firebaseapp.com",
    projectId: "kmvpl-254b9",
    storageBucket: "kmvpl-254b9.appspot.com",
    messagingSenderId: "801945158749",
    appId: "1:801945158749:web:ff6b9697183c5a3c2079b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);