// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6eZfb1M7NP_7lIgwQlS3xMvC8LVCf9DE",
  authDomain: "thatonlinemuseum.firebaseapp.com",
  projectId: "thatonlinemuseum",
  storageBucket: "thatonlinemuseum.appspot.com",
  messagingSenderId: "684483382216",
  appId: "1:684483382216:web:71783ebfd3474900328efd",
  measurementId: "G-KZQXZ2SQ12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);