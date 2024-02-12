import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDtHBVBmcG3gcYxhhBXD0DceS8QVymgm8M",
    authDomain: "umbrella-system-6eeb4.firebaseapp.com",
    databaseURL: "https://umbrella-system-6eeb4-default-rtdb.firebaseio.com",
    projectId: "umbrella-system-6eeb4",
    storageBucket: "umbrella-system-6eeb4.appspot.com",
    messagingSenderId: "890335340966",
    appId: "1:890335340966:web:ee874aa1f4ba4635c00767"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };