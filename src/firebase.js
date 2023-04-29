// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGp5KdpRfV2wxzNDerX8GEK48PE4aOSBI",
  authDomain: "attendence-management-t-15.firebaseapp.com",
  projectId: "attendence-management-t-15",
  storageBucket: "attendence-management-t-15.appspot.com",
  messagingSenderId: "472102779060",
  appId: "1:472102779060:web:37239762f1b622e8503fe1",
  measurementId: "G-C3EK0S3ELJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db}