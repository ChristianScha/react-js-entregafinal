// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdmK08EOjj5HMKHxY4-Ys_8sY7Qx6mM1M",
  authDomain: "reactjsentrega.firebaseapp.com",
  projectId: "reactjsentrega",
  storageBucket: "reactjsentrega.firebasestorage.app",
  messagingSenderId: "225859434744",
  appId: "1:225859434744:web:0b4872471d43a71100e30d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { auth, db };
