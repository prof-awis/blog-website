// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import App from "./App";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtTWOfHLSx6_-DxF8Ngx0zlojM-lXG5n0",
  authDomain: "blog-website-af91f.firebaseapp.com",
  projectId: "blog-website-af91f",
  storageBucket: "blog-website-af91f.appspot.com",
  messagingSenderId: "900484346062",
  appId: "1:900484346062:web:cdf233c0d2e44fc858609f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//WE export the two since we will be accessing them outside the file
//Connect needed related to firebase
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
