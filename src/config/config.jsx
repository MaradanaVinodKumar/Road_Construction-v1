import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCnP3FHliLTt_Jf0pBI5dZ9qfQZh3dUr-M",
    authDomain: "vinod-c848d.firebaseapp.com",
    projectId: "vinod-c848d",
    storageBucket: "vinod-c848d.appspot.com",
    messagingSenderId: "947962151563",
    appId: "1:947962151563:web:6917df042e209704d3ca8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const imageDb = getStorage(app);