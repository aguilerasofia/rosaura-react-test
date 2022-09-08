// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdp0YyqD6oKM-qeiABH3Yd-V0vVDXFWEc",
    authDomain: "react-rosaura.firebaseapp.com",
    projectId: "react-rosaura",
    storageBucket: "react-rosaura.appspot.com",
    messagingSenderId: "888484151655",
    appId: "1:888484151655:web:21ddabccd14c32c0f06fc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db