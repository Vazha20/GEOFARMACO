// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDGqcBjiizHgN1r9_LUbAQjLjQjsG4B-ok",
  authDomain: "geofarmaco-ad42c.firebaseapp.com",
  projectId: "geofarmaco-ad42c",
  storageBucket: "geofarmaco-ad42c.appspot.com",
  messagingSenderId: "505324931269",
  appId: "1:505324931269:web:1b3406b8ee292d8b6848ac",
  measurementId: "G-3Y9NW95930"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);