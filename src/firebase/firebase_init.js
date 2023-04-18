// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_QrOOEeXZR_s2uxZtbOiHBLNphb5wQS4",
  authDomain: "ema-john-ecommerce-1f4e9.firebaseapp.com",
  projectId: "ema-john-ecommerce-1f4e9",
  storageBucket: "ema-john-ecommerce-1f4e9.appspot.com",
  messagingSenderId: "375096487969",
  appId: "1:375096487969:web:3353a6c3ad62f02b33f360"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;