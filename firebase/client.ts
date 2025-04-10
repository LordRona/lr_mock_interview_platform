
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfvv8jEmLx0lY4Q82DORDuojKcnysk5u8",
  authDomain: "aiquestioninterviews.firebaseapp.com",
  databaseURL: "https://aiquestioninterviews-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "aiquestioninterviews",
  storageBucket: "aiquestioninterviews.firebasestorage.app",
  messagingSenderId: "539793993280",
  appId: "1:539793993280:web:dafc13f6455c2e137f79a5",
  measurementId: "G-NXG9Z4CX7K"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);